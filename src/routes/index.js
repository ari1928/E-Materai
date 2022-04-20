import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard/Dashbord'))
// const NumberMasking = lazy(() => import('../pages/NumberMasking/NumberMasking'))
// const CallHistory = lazy(() => import('../pages/CallHistory/CallHistory'))
// const UsersManagement = lazy(() => import('../pages/Users/Users'))
// const Configuration = lazy(() => import('../pages/Configuration/configuration'))
// const Forms = lazy(() => import('../pages/Forms'))
// const Cards = lazy(() => import('../pages/Cards'))
// const Charts = lazy(() => import('../pages/Charts'))
// const Buttons = lazy(() => import('../pages/Buttons'))
// const Modals = lazy(() => import('../pages/Modals'))
// const Tables = lazy(() => import('../pages/Tables'))
// const Page404 = lazy(() => import('../pages/404'))
// const Blank = lazy(() => import('../pages/Blank'))
 const Saldo = lazy(() => import('../pages/Saldo/Saldo'))
 const Generate = lazy(() => import('../pages/Generate/Generate'))
 const BulkGenerate = lazy(() => import('../pages/BulkGenerate/BulkGenerate'))
 const Stamping = lazy(() => import('../pages/Stamping/Stamping'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Number Masking', component: Dashboard },
  // { path: '/number-masking', name: 'Number Masking', component: NumberMasking },
  // { path: '/call-history', name: 'Call History', component: CallHistory },
  // { path: '/users', name: 'Users Management', component: UsersManagement },
  // { path: '/configuration', name: 'Configuration', component: Configuration, },
  // { path: '/cards', name: 'Number Masking', component: Cards, },
  // { path: '/charts', name: 'Number Masking', component: Charts, },
  // { path: '/buttons', name: 'Number Masking', component: Buttons, },
  // { path: '/modals', name: 'Number Masking', component: Modals, },
  // { path: '/tables', name: 'Number Masking', component: Tables, },
  // { path: '/404', name: 'Number Masking', component: Page404, },
  // { path: '/blank', name: 'Number Masking', component: Blank, },
  { path: '/Saldo', name: 'Saldo', component: Saldo, },
  { path: '/Generate', name: 'Generate', component: Generate, },
  { path: '/BulkGenerate', name: 'BulkGenerate', component: BulkGenerate, },
  { path: '/Stamping', name: 'Stamping', component: Stamping, },
]

export default routes
