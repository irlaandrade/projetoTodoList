
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'atividades-atribuidas', component: () => import('pages/AtividadesAtribuidas.vue') }
    ]
  },
  {
    path: '/controle/',
    component: () => import('layouts/Controle.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: 'sign-up', component: () => import('pages/SignUp.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
