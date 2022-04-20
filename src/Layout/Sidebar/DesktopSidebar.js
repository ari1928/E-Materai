import React from 'react'
import { useSelector } from 'react-redux'

import SidebarContent from './SidebarContent'

function DesktopSidebar() {
  const shidebarMinize = useSelector((state) => state.ReduxState.shidebarMinize)
  const menuDesktop = useSelector((state) => state.ReduxState.menuDesktop)

  if (menuDesktop === true) {
    return (
      <aside className={(shidebarMinize ? "w-14" : "w-64") + " z-30 flex-shrink-0 hidden  overflow-y-auto bg-white dark:bg-gray-800 lg:block"}>
        <SidebarContent />
      </aside >
    )
  }
  return (
    <>
    </>
  )
}

export default DesktopSidebar
