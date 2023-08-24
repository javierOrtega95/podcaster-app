import { useEffect, useState } from 'react'
import { type Podcast } from '../models/Podcast.model'
import { getTopPodcasts } from '../services/podcast'
import {
  getPodcastsFromStorage,
  getlastFetchDateFromStorage,
  saveToStorage
} from '../logic/storage'
import { oneDaySinceLastFetch } from '../logic/time'

export function usePodcasts (search: string) {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])

  useEffect(() => {
    const lastAPIFetchDate = getlastFetchDateFromStorage('lastPodcastsFetch')
    const podcastFromStorage: Podcast[] = getPodcastsFromStorage()

    if (
      oneDaySinceLastFetch(lastAPIFetchDate) ||
      podcastFromStorage.length === 0
    ) {
      getTopPodcasts()
        .then((value) => {
          const podcasts = value as Podcast[]
          setPodcasts(podcasts)
          saveToStorage({
            dataKey: 'podcasts',
            data: podcasts,
            lastAPIFetchKey: 'lastPodcastsFetch'
          })
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      setPodcasts(podcastFromStorage)
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
