import { type ApiReponsePodcast } from '../models/API.model'
import { type Podcast } from '../models/Podcast.model'

export function podcastsAdapter (podcasts: ApiReponsePodcast[]): Podcast[] {
  return podcasts.map((podcast: ApiReponsePodcast) => ({
    id: podcast.id.attributes['im:id'],
    name: podcast['im:name'].label,
    image: podcast['im:image']?.[2].label as string,
    artist: podcast['im:artist']?.label as string
  }))
}
