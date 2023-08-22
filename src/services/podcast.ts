import { podcastsAdapter } from '../adapters/podcast'
import { type TopPodcastApiResponse } from '../models/API.model'

const API_URL = 'https://itunes.apple.com'

export const getTopPodcasts = async () => {
  try {
    const response = await fetch(`${API_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`)

    if (!response.ok) {
      throw new Error('Error fetching podcasts')
    }
    const json: TopPodcastApiResponse = await response.json()
    console.log(podcastsAdapter(json.feed.entry))

    return podcastsAdapter(json.feed.entry)
  } catch (error) {
    console.error(error)
  }
}
