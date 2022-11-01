import type { FC } from 'react'

import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Dashboard } from './components/Dashboard'
import { Nav } from './components/Nav'

const App: FC = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  )
}

export { App }
