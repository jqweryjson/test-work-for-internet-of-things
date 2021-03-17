import type { FC } from 'react'

import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Signup } from './components/Signup'
import { PrivateRoute } from './router/PrivateRoute'

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <PrivateRoute exact path="/admin" component={Home} />
    </Switch>
  )
}

export { App }
