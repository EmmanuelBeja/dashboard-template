import Error404 from '../components/ErrorPages/Error404'
import LandingPage from '../../modules/LandingPage'
import Dashboard from '../../modules/Dashboard'
import Library from '../../modules/Library'
import Settings from '../../modules/Settings'
import CourseBuilder from '../../modules/CourseBuilder'
import Drafts from '../../modules/CourseBuilder/Drafts'
import CourseReview from '../../modules/CourseBuilder/Review'

// Route Views
export const publicRoutes = [
  {
    path: '/',
    component: LandingPage,
    exact: true,
    roles: ['PUBLIC'],
  },
  {
    path: '/error404',
    component: Error404,
    roles: ['PUBLIC'],
  },
  {
    // move to private routes on implementing auth
    path: '/home',
    component: Dashboard,
    exact: true,
    roles: ['*'],
  },
  {
    // move to private routes on implementing auth
    path: '/library',
    component: Library,
    exact: true,
    roles: ['*'],
  },
  {
    // move to private routes on implementing auth
    path: '/settings',
    component: Settings,
    exact: true,
    roles: ['*'],
  },
  {
    // move to private routes on implementing auth
    path: '/course/builder',
    component: CourseBuilder,
    exact: true,
    roles: ['*'],
  },
  {
    // move to private routes on implementing auth
    path: '/course/drafts',
    component: Drafts,
    exact: true,
    roles: ['*'],
  },
  {
    // move to private routes on implementing auth
    path: '/course/review',
    component: CourseReview,
    exact: true,
    roles: ['*'],
  },
]

export const privateRoutes = []
