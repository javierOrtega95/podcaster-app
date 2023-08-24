import { type PodcastDetail } from '../models/PodcastDetail.model'

export function podcastXMLToJSON (text: string) {
  const parser = new window.DOMParser()

  const data = parser.parseFromString(text, 'text/xml')

  const channel = data.querySelector('channel') as HTMLElement

  const title = channel.querySelector('title')?.textContent as string

  const author = channel.querySelector('author')?.textContent as string

  const image = channel.querySelector('image')

  const imageUrl = (image?.querySelector('url')?.textContent ?? image?.getAttribute('href')) as string

  const description = channel.querySelector('description')?.textContent as string

  const episodeElements = Array.from(channel?.querySelectorAll('item') ?? [])

  const episodes = episodeElements.map((episodeElement) => {
    const title = episodeElement.querySelector('title')?.textContent as string
    const date = new Date(episodeElement.querySelector('pubDate')?.textContent as string)
    const duration = episodeElement.querySelector('duration')?.textContent as string

    return {
      title,
      date,
      duration
    }
  })

  const podcastDetail: PodcastDetail = {
    title,
    author,
    imageUrl,
    description: normalizedCDATAText(description),
    episodes
  }

  return podcastDetail
}

function normalizedCDATAText (text: string) {
  const tempDiv = document.createElement('div') as HTMLElement

  tempDiv.innerHTML = text

  return tempDiv.innerText
}
