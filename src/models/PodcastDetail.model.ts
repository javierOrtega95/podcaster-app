export interface PodcastDetail {
  title: string
  author: string
  imageUrl: string
  description: string
  episodes: Episode[]
}

interface Episode {
  title: string
  date: Date
  duration: string
}
