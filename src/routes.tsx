import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { getlastFetchDateFromStorage, getPodcastDetailFromStorage } from './logic/storage'
import { oneDaySinceLastFetch } from './logic/time'
import { getPodcastDetail } from './services/podcast'
import { Layout } from './views/components/layout/Layout'
import { Home } from './views/home/Home'
import { PodcastDetail } from './views/podcastDetail/PodcastDetail'

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
    loader: async ({ params }) => {
      const lastAPIFetchDate = getlastFetchDateFromStorage('lastPodcastDetailFetch')
      const podcastDetailFromStorage = getPodcastDetailFromStorage(params.podcastId as string)

      if (oneDaySinceLastFetch(lastAPIFetchDate) || podcastDetailFromStorage === null) {
        return await getPodcastDetail(params.podcastId as string)
      }

      return podcastDetailFromStorage
    },
    element: <PodcastDetail />

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
