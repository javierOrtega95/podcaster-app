import { podcastsAdapter } from '../adapters/podcast'
import { podcastXMLToJSON } from '../helpers/podcastXMLToJSON'
import { saveToStorage } from '../logic/storage'
import { type TopPodcastApiResponse } from '../models/API.model'
import { type PodcastDetail } from '../models/PodcastDetail.model'

const API_URL = 'https://itunes.apple.com'

const PROXY_SERVER_URL = 'https://cors-anywhere.herokuapp.com/'

export const getTopPodcasts = async () => {
  try {
    const response = await fetch(
      `${API_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`
    )

    if (!response.ok) {
      throw new Error('Error fetching podcasts')
    }
    const json: TopPodcastApiResponse = await response.json()

    return podcastsAdapter(json.feed.entry)
  } catch (error) {
    console.error(error)
  }
}

export const getPodcastDetail = async (podcastId: string) => {
  try {
    const PODCAST_DETAIL_URL = `${API_URL}/lookup?id=${podcastId}`

    const response = await fetch(`${PROXY_SERVER_URL}${PODCAST_DETAIL_URL}`)

    if (!response.ok) {
      throw new Error('Error fetching podcast detail')
    }
    const json = await response.json()

    const feedUrl = json.results[0].feedUrl

    const podcastDetail = (await getPodcastFeed(
      feedUrl,
      podcastId
    )) as PodcastDetail

    saveToStorage({
      dataKey: podcastId,
      data: podcastDetail,
      lastAPIFetchKey: 'lastPodcastDetailFetch'
    })

    return podcastDetail
  } catch (error) {
    console.error(error)
  }
}

const getPodcastFeed = async (feedUrl: string, podcastId: string) => {
  try {
    const response = await fetch(`${PROXY_SERVER_URL}${feedUrl}`)

    if (!response.ok) {
      throw new Error('Error fetching podcast feed')
    }

    const text = await response.text()

    const podcastDetail = podcastXMLToJSON(text, podcastId)

    return podcastDetail
  } catch (error) {
    console.error(error)
  }
}
