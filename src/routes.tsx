import { type RouteObject, createBrowserRouter, Link } from 'react-router-dom'
import { PodcastList } from './views/PodcastList'
import { Header } from './components/header/Header'

const PATHS = {
  DEFAULT: '/',
  PODCAST_DETAIL: '/podcast/:podcastId',
  EPISODE_DETAIL: '/podcast/:podcastId/episode/:episodeId'
}

export const routes: RouteObject[] = [
  {
    path: PATHS.DEFAULT,
    element: <PodcastList />
  },
  {
    path: PATHS.PODCAST_DETAIL,
    element: (
      <Link to='/'>
        <h1>Podcast Detail</h1>
      </Link>
    )
  },
  {
    path: PATHS.EPISODE_DETAIL,
    element: <h1>Episode Detail</h1>
  }
]

export const router = createBrowserRouter([
  {
    element: <Header />,
    children: routes
  }
])

export default router
