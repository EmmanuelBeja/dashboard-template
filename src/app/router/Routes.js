/**
 * High level router.
 */
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './RoutesConfig'
import { PrivateRoute } from './PrivateRoute'

export const Routes = () => {
  return (
    <Switch>
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact || false}
          component={route.component}
        />
      ))}
      {privateRoutes.map((route, index) => (
        <PrivateRoute
          roles={route.roles}
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Route
        path="*"
        render={(props) => (
          <Redirect to={{ pathname: '/error404', state: { from: props.location } }} />
        )}
      />
    </Switch>
  )
}
