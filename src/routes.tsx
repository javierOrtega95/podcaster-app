import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { Layout } from './views/components/layout/layout'
import { Home } from './views/home/Home'

const PATHS = {
  DEFAULT: '/',
  PODCAST_DETAIL: '/podcast/:podcastId',
  EPISODE_DETAIL: '/podcast/:podcastId/episode/:episodeId'
}

export const routes: RouteObject[] = [
  {
    path: PATHS.DEFAULT,
    element: <Home />
  },
  {
    path: PATHS.PODCAST_DETAIL
  },
  {
    path: PATHS.EPISODE_DETAIL
  }
]

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes
  }
])

export default router
