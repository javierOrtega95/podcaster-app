export interface PodcastDetail {
  id: string
  title: string
  author: string
  imageUrl: string
  description: string
  episodes: Episode[]
}

export interface Episode {
  id: string
  title: string
  description: string
  date: string
  duration: string
  audioUrl: string
}
