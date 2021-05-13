import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import * as routerHelpers from './RouterHelpers'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = routerHelpers.getUser()
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} roles={rest.roles} user={user} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}
