const localStorageUseProfilerKey = 'userProfile'

export const getUser = () => {
  const store = localStorage.getItem('state')
  const deseriealizedStore = store ? JSON.parse(store) : null
  return deseriealizedStore && deseriealizedStore.auth.user ? deseriealizedStore.auth.user : null
}

export function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

export const forgetUser = () => {
  localStorage.clear()
}

export function getUserProfile() {
  const store = localStorage.getItem(localStorageUseProfilerKey)
  const userProfile = store ? JSON.parse(store) : {}
  return userProfile
}

export function setUserProfile(user) {
  localStorage.setItem(localStorageUseProfilerKey, JSON.stringify(user))
}
