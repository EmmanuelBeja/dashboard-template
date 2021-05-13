import axios from 'axios'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import qs from 'qs'
import { isEmpty } from 'lodash'
import * as routeHelpers from '../app/router/RouterHelpers'

let isAlreadyFetchingAccessToken = false

// This is the list of waiting requests that will retry after the JWT refresh complete
let subscribers = []

export const LOGIN_URL = '/oauth/token'
export const ME_URL = '/users/profile'
export const EXIT_URL = '/exit'

export const requestDefaults = {
  baseURL: process.env.REACT_APP_API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
}

export function authHeader() {
  // return authorization header with jwt token
  const user = routeHelpers.getUser()
  if (user && user.accessTokenString) {
    const { accessTokenString } = user
    return {
      Authorization: `Bearer ${accessTokenString}`,
    }
  }
  return {}
}

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    ...authHeader(),
  },
})

export const axiosInstanceForFiles = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  headers: {
    // 'Content-Type': 'multipart/mixed',
    accept: 'application/json',
    ...authHeader(),
  },
})

export function handleResponse(res) {
  if (res.status === 200) {
    const { data } = res.data
    return data
  }
  const { response } = res
  const { data } = response
  const { message } = data
  return Promise.reject(message)
}

export function handleResponseError(error) {
  const { response } = error

  if (!response) {
    return error.toString()
  }

  const { data } = response

  if (!data) {
    return error.toString()
  }

  const { message } = data

  if (!message) {
    return error.toString()
  }

  return message
}

/**
 * Handle user details from access token
 */
export function handleUserResponse(token, refreshToken) {
  // Decode token to get user data and save in storage
  const user = jwt_decode(token)

  user.accessTokenString = token
  user.refreshTokenString = refreshToken

  routeHelpers.setUser(user)

  return user
}

export function loginWithUsernamePassord(username, password) {
  const args = {
    method: 'post',
    baseURL: process.env.REACT_APP_API_BASE,
    url: '/oauth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data: qs.stringify({
      username,
      password,
      grant_type: 'password',
    }),
    auth: {
      username: process.env.REACT_APP_API_USERNAME,
      password: process.env.REACT_APP_API_PASSWORD,
    },
  }

  return axios(args).then((res) => {
    const { status } = res
    if (status === 200) {
      // Save to localStorage
      // Set token to localStorage
      const { access_token, refresh_token } = res.data

      // Handle user data
      const user = handleUserResponse(access_token, refresh_token)

      return user
    }
    if (status === 401) {
      // auto logout if 401 response returned from api
      window.location.href = '/logout'
    }
    const error = (res && res.message) || res.statusText
    return Promise.reject(error)
  })
}

/**
 * Fetch new access Token from remote using refresh_token
 */
export function refreshAccessToken(refreshTokenString) {
  const args = {
    method: 'post',
    baseURL: process.env.REACT_APP_API_BASE,
    url: LOGIN_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data: qs.stringify({
      refresh_token: refreshTokenString,
      grant_type: 'refresh_token',
    }),
    auth: {
      username: process.env.REACT_APP_API_USERNAME,
      password: process.env.REACT_APP_API_PASSWORD,
    },
    validateStatus: (status) => {
      return true // I'm always returning true, you may want to do it depending on the status received
    },
  }

  return axios(args)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
}

export function getUserByToken() {
  const user = routeHelpers.getUser()
  const { accessTokenString } = user
  // Authorization head should be fulfilled in interceptor.
  const args = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${accessTokenString}`,
      Accept: 'application/json',
    },
    url: ME_URL,
  }

  const requestConfig = {
    ...requestDefaults,
    ...args,
  }

  return axios(requestConfig)
    .then(handleResponse)
    .then((data) => {
      routeHelpers.setUserProfile(data)
      return data
    })
}

export function logout() {
  const user = routeHelpers.getUser()
  const { accessTokenString } = user
  // Authorization head should be fulfilled in interceptor.
  const args = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${accessTokenString}`,
      Accept: 'application/json',
    },
    url: EXIT_URL,
  }

  const requestConfig = {
    ...requestDefaults,
    ...args,
  }

  return axios(requestConfig).then(handleResponse)
}

export function isTokenExpiredError(error) {
  const { response } = error
  if (!response) {
    return true
  }

  const { status, data } = response
  const user = routeHelpers.getUser()

  if (isEmpty(user)) {
    return false
  }

  const { exp } = user
  const currentUnixTime = new Date().getTime() / 1000

  if (data.error === 'invalid_token' || status === 401 || currentUnixTime > exp) {
    return true
  }

  return false
}

export function addSubscriber(callback) {
  subscribers.push(callback)
}

/**
 * When the refresh is successful, we start retrying the requests one by one and empty the queue
 */
export function onAccessTokenFetched(user) {
  const { accessTokenString } = user
  subscribers.forEach((callback) => callback(accessTokenString))
  subscribers = []
}

/**
 * Fetch new token and retry failed requests
 * @param {*} error
 */
export function resetTokenAndReattemptRequest(error) {
  try {
    const originalRequest = error.config

    /* Proceed to the token refresh procedure
        We create a new Promise that will retry the request,
        clone all the request configuration from the failed
        request in the error object. */
    const retryOriginalRequest = new Promise((resolve) => {
      /* We need to add the request retry to the queue
                since there another request that already attempt to
                refresh the token */
      addSubscriber((accessTokenString) => {
        axiosInstance.defaults.headers.Authorization = `Bearer ${accessTokenString}`
        originalRequest.headers.Authorization = `Bearer ${accessTokenString}`
        resolve(axios(originalRequest))
      })
    })

    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true

      const user = routeHelpers.getUser()
      const { refreshTokenString } = user

      refreshAccessToken(refreshTokenString)
        .then((response) => {
          if (!response || response.status !== 200) {
            window.location.href = '/logout'
          }

          if (response.status === 200) {
            const { access_token, refresh_token } = response.data

            // Handle user data
            const user = handleUserResponse(access_token, refresh_token)

            return user
          }

          const tokenError = response.data.message || response.statusText
          return Promise.reject(tokenError)
        })
        .then((user) => {
          getUserByToken()
          return user
        })
        .then((user) => {
          isAlreadyFetchingAccessToken = false
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          onAccessTokenFetched(user)
          return user
        })
    }

    return retryOriginalRequest
  } catch (err) {
    return Promise.reject(err)
  }
}

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isTokenExpiredError(error)) {
      return resetTokenAndReattemptRequest(error)
    }
    return Promise.reject(error)
  }
)
