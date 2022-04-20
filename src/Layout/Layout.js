import React, { Suspense } from 'react'
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from 'src/Layout/Header/Header';
import Sidebar from 'src/Layout/Sidebar';
import ThemedSuspense from 'src/components/ThemedSuspense';
import routes from '../routes/index'
import Main from './Main';

// const Page404 = lazy(() => import('../pages/Page404/404'))


export default function Layout() {
  const show = useSelector((state) => state.ReduxState.sidebarOpen)

  return (
    <>
      <div
        className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${show && 'overflow-hidden'}`}
      >
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <Main>
            <Suspense fallback={<ThemedSuspense />}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (<route.component {...props} />)}
                    />
                  )
                })}
                < Redirect from="/" to="/number-masking" />
              </Switch>
            </Suspense>
          </Main>
        </div>
      </div>
    </>
  )
}
