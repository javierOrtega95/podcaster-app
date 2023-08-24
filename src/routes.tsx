import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { Home } from './views/home/Home'
import { PodcastDetail } from './views/podcastDetail/PodcastDetail'
import { Layout } from './views/components/layout/Layout'
import { getPodcastDetail } from './services/podcast'

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
    path: PATHS.PODCAST_DETAIL,
    element: <PodcastDetail />,
    loader: async ({ params }) => {
      return await getPodcastDetail(params.podcastId as string)
    }
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
