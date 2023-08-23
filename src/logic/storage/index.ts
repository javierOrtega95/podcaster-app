import { type Podcast } from '../../models/Podcast.model'

export const savePodcastToStorage = ({ podcasts, lastAPIFetchDate }: { podcasts: Podcast[], lastAPIFetchDate: number }) => {
  window.localStorage.setItem('podcasts', JSON.stringify(podcasts))
  window.localStorage.setItem('lastAPIFetchDate', lastAPIFetchDate.toString())
}

export const getPodcastsFromStorage = () => {
  const podcasts = window.localStorage.getItem('podcasts')
  return podcasts !== null ? JSON.parse(podcasts) : []
}

export const getlastAPIFetchDateFromStorage = () => {
  const lastAPIFetchDate = window.localStorage.getItem('lastAPIFetchDate')

  return Number(lastAPIFetchDate)
}
