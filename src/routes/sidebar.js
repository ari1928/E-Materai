/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
 const routes = [
  {
    path: '/Saldo', // the url
    icon: 'fas fa-phone-alt', // the component being exported from icons/index.js
    name: 'Cek Saldo', // name that appear in Sidebar
  },
  {
    path: '/generate', // the url
    icon: 'fas fa-history', // the component being exported from icons/index.js
    name: 'Generate Meterai', // name that appear in Sidebar
  },
   {
     path: '/BulkGenerate', // the url
     icon: 'fas fa-users-cog', // the component being exported from icons/index.js
     name: 'Bulk Generate', // name that appear in Sidebar
   },
  {
    path: '/Stamping', // the url
     icon: 'fas fa-cogs', // the component being exported from icons/index.js
     name: 'Stamping', // name that appear in Sidebar
   },
   {
    path: '/BulkStamping', // the url
     icon: 'fas fa-cogs', // the component being exported from icons/index.js
     name: 'Bulk Stamping', // name that appear in Sidebar
   },
   {
    path: '/JenisDocs', // the url
     icon: 'fas fa-cogs', // the component being exported from icons/index.js
     name: 'JenisDocs', // name that appear in Sidebar
   },
]

export default routes
