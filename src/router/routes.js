
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Todo.vue') },
      { path: '/favourites', component: () => import('pages/favourites.vue') },
      { path: '/profile', component: () => import('pages/profile.vue') },
      { path: '/moves-aerials', component: () => import('pages/moves-aerials.vue') },
      { path: '/moves-climbs', component: () => import('pages/moves-climbs.vue') },
      { path: '/moves-floor', component: () => import('pages/moves-floor.vue') },
      { path: '/moves-inverts', component: () => import('pages/moves-inverts.vue') },
      { path: '/moves-sits', component: () => import('pages/moves-sits.vue') },
      { path: '/moves-spins', component: () => import('pages/moves-spins.vue') },
      { path: '/moves-splits', component: () => import('pages/moves-splits.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
