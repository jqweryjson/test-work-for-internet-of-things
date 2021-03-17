import type { FC } from 'react'

import * as React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

const isAuth = true

type PrivateRouteProps = {
  path: RouteProps['path']
  exact: RouteProps['exact']
  component: React.ElementType
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={({ location }) =>
        isAuth ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  )
}

export { PrivateRoute }
