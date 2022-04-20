import React, { useEffect, useState } from 'react'
import routes from '../../routes/sidebar'
import { Link, NavLink, Route } from 'react-router-dom'
import SidebarSubmenu from './SidebarSubmenu'
import { useDispatch, useSelector } from 'react-redux'
import JwtToken from 'src/hash/JwtToken';

function SidebarContent() {
  const [menu, setMenu] = useState([])
  const shidebarMinize = useSelector((state) => state.ReduxState.shidebarMinize)
  const sidebarOpen = useSelector((state) => state.ReduxState.sidebarOpen)

  const dispatch = useDispatch()
  useEffect(() => {
    const decode = JwtToken(sessionStorage.getItem("accessToken") || localStorage.getItem('accessToken'))
    if (decode.role === "user") {
      setMenu(routes.slice(0, 2))
    } else if (decode.role === "admin") {
      setMenu(routes.slice(0, 3))
    } else {
      setMenu(routes)
    }
  }, [])

  // console.log(shidebarMinize)

  return (
    <>
      <div className="py-4 text-gray-500 dark:text-gray-400 ">
        {/* <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="/app/dashboard">
      </a> */}
        <div className="text-center top-0 bottom-0">
          <Link
            className="text-lg font-bold text-gray-800 dark:text-gray-200"
            to="/"
          >
            {shidebarMinize ? (
              <div className="text-2xl h">
                <i className="fas fa-home" />
              </div>
            ) : (
              
              <div>
                <img src={require('src/assets/image/E-meterai.png').default} />
              </div>
            )}
          </Link>
        </div>
        {shidebarMinize ? (
          <>
            <div className="text-center pl-1">
              <hr className="mt-6 w-11/12 " />
            </div>
          </>
        ) : (
          <div className="text-center pl-5">
            <hr className="mt-7 w-11/12 " />
          </div>
        )}
        <ul className="mt-4">
          {menu.map((route) =>
            route.routes ? (
              <SidebarSubmenu route={route} key={route.name} />
            ) : (
              <li className=" " key={route.name} onClick={() => dispatch({ type: 'set', sidebarOpen: false })}>
                <NavLink
                  exact
                  replace
                  to={route.path}
                  className="has-tooltip inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 rounded-xl hover:bg-teal-50 dark:hover:bg-gray-600"
                  activeClassName="text-gray-800 dark:text-gray-100 bg-gray-100 rounded-xl dark:bg-gray-500"
                >
                  <Route path={route.path} exact={route.exact}>
                    {/* <span
                      className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg  "
                      aria-hidden="true"
                    /> */}
                  </Route>
                  {shidebarMinize ? (
                    <>
                      <div className="h-auto w-full px-4 py-3 rounded-2xl text-lg ">
                        <i className={"text-center w-5 h-5 " + (route.icon)} ></i>
                        <span className="tooltip bg-indigo-500 dark:bg-gray-700 hover:text-gray-300 text-white w-60 h-12 pt-2 -mt-3 pl-4 ml-5 text-lg rounded-r-md">
                          {route.name}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      < div className=" h-auto w-auto px-4  py-3 min-w-auto rounded-2xl ">
                        <i className={"w-5 h-5 text-lg " + (route.icon)} aria-hidden="true" ></i>
                        <span className="ml-4 text-sm ">{route.name}</span>
                      </div>
                    </>
                  )
                  }
                </NavLink>
              </li>
            )
          )}
        </ul>
        
        <div 
        className={(shidebarMinize ? " w-14 " : " w-64 ") + " absolute block bottom-0 h-12 pt-2 text-right px-4 bg-blue-500 hover:bg-blue-400 dark:bg-gray-700 dark:text-purple-300 text-black text-3xl hover:text-white dark:hover:text-gray-400 dark:hover:bg-gray-500 cursor-pointer "}
          onClick={() => dispatch({ type: 'set', shidebarMinize: !shidebarMinize, })}
        >
          <i className={"fas " + (shidebarMinize ? "fa-angle-right" : "fa-angle-left")} />
        </div>

      </div>
    </>
  )
}

export default SidebarContent
