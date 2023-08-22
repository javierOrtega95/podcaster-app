import { type RouteObject, createBrowserRouter } from 'react-router-dom'
import { Home } from './views/podcastList/Home'
import { Header } from './components/header/Header'
import { getTopPodcasts } from './services/podcast'

const PATHS = {
  DEFAULT: '/',
  PODCAST_DETAIL: '/podcast/:podcastId',
  EPISODE_DETAIL: '/podcast/:podcastId/episode/:episodeId'
}

export const routes: RouteObject[] = [
  {
    path: PATHS.DEFAULT,
    loader: getTopPodcasts,
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
    element: <Header />,
    children: routes
  }
])

export default router
