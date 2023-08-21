import { type RouteObject, createBrowserRouter } from 'react-router-dom'
import { PodcastList } from './views/PodcastList'

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
    element: <h1>Podcast Detail</h1>
  },
  {
    path: PATHS.EPISODE_DETAIL,
    element: <h1>Episode Detail</h1>
  }
]

const router = createBrowserRouter(routes)

export default router
