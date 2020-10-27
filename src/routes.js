import VueRouter from 'vue-router'
import SpaCustomization from './pages/spaCustomization'
import SpaPlanning from './pages/spaPlanning'
import SpaConfirmation from './pages/spaConfirmation'
import PlanningMap from './pages/planningMap'
import ErrorCmp from './pages/ErrorCmp'

export default new VueRouter({
  routes:[
    {
      path: '',
      component: SpaCustomization
    },
    {
      path: '/Planning',
      component: SpaPlanning
    },
    {
      path: '/Confirmation',
      component: SpaConfirmation
    },
    {
      path: '/PlanningMap',
      component: PlanningMap
    },
    {
      path: '*',
      component: ErrorCmp
    },
  ],
  mode: 'history'
})
