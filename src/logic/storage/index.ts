import { type Podcast } from '../../models/Podcast.model'
import { type PodcastDetail } from '../../models/PodcastDetail.model'

export const saveToStorage = ({
  dataKey,
  lastAPIFetchKey,
  data
}: {
  dataKey: string
  lastAPIFetchKey: string
  data: Podcast[] | PodcastDetail
}) => {
  window.localStorage.setItem(dataKey, JSON.stringify(data))
  window.localStorage.setItem(lastAPIFetchKey, Date.now().toString())
}

export const getlastFetchDateFromStorage = (key: string) => {
  const lastAPIFetchDate = window.localStorage.getItem(key)

  return lastAPIFetchDate !== null
    ? parseInt(lastAPIFetchDate, 10)
    : Date.now()
}

export const getPodcastsFromStorage = () => {
  const podcasts = window.localStorage.getItem('podcasts')
  return podcasts !== null ? JSON.parse(podcasts) : []
}

export const getPodcastDetailFromStorage = (id: string) => {
  const podcast = window.localStorage.getItem(id)
  return podcast !== null ? JSON.parse(podcast) : null
}
