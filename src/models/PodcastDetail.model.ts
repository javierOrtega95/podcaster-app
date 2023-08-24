export interface PodcastDetail {
  id: string
  title: string
  author: string
  imageUrl: string
  description: string
  episodes: Episode[]
}

interface Episode {
  title: string
  date: string
  duration: string
}
