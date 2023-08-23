import { useEffect, useState } from 'react'
import { type Podcast } from '../models/Podcast.model'
import { getTopPodcasts } from '../services/podcast'
import {
  getPodcastsFromStorage,
  getlastAPIFetchDateFromStorage,
  savePodcastToStorage
} from '../logic/storage'
import { oneDayAgo } from '../logic/time'

export function usePodcasts (search: string) {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])

  useEffect(() => {
    const lastAPIFetchDate = getlastAPIFetchDateFromStorage() ?? Date.now()

    if (oneDayAgo({ currentDate: Date.now(), lastAPIFetchDate })) {
      getTopPodcasts()
        .then((value) => {
          const podcasts = value as Podcast[]
          setPodcasts(podcasts)
          savePodcastToStorage({
            podcasts,
            lastAPIFetchDate: new Date().getTime()
          })
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      const podcasts = getPodcastsFromStorage()
      setPodcasts(podcasts)
    }
  }, [])

  const filteredPodcasts = podcasts.filter((podcast) => {
    return (
      podcast.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      podcast.artist?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  })

  return { podcasts: filteredPodcasts }
}
