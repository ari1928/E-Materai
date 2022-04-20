import React from 'react'

import SidebarContent from './SidebarContent'
import { Transition, Backdrop } from '@windmill/react-ui'

import { useDispatch, useSelector } from 'react-redux'

function MobileSidebar() {
  const shidebarMinize = useSelector((state) => state.ReduxState.shidebarMinize)
  const dispatch = useDispatch()
  const isSidebarOpen = useSelector((state) => state.ReduxState.sidebarOpen)

  return (
    <>
    
    <div className="bg-purple-700"></div>
      <Transition show={isSidebarOpen}>
        <>
          <Transition
            enter="transition ease-in-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Backdrop onClick={() => dispatch({ type: 'set', sidebarOpen: false })} />
          </Transition>
          <Transition
            enter="transition ease-in-out duration-150"
            enterFrom="opacity-0 transform -translate-x-20"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 transform -translate-x-20"
          >
            <aside className={(shidebarMinize ? "w-14  " : "w-64 absolute mt-17 ") + "  inset-y-0 z-50 flex-shrink-0 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden"}
            >
              <SidebarContent />
            </aside>
          </Transition>
        </>
      </Transition>
    </>
  )
}

export default React.memo(MobileSidebar)
