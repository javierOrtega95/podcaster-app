import { type Podcast } from '../../../models/Podcast.model'

interface Props {
  podcasts: Podcast[]
}

export function Podcasts ({ podcasts }: Props) {
  const hasPodcasts = podcasts?.length > 0

  return hasPodcasts
    ? (
    <ListOfPodcasts podcasts={podcasts} />
      )
    : (
    <NoPodcastResults />
      )
}

export function ListOfPodcasts ({ podcasts }: Props) {
  return (
    <div className='podcast-grid'>
      {podcasts.map((podcast) => (
        <div key={podcast.id} className='podcast-card'>
          <div className='podcast-image'>
            <img src={podcast.image} alt={podcast.name} />
          </div>
          <div className='podcast-body'>
            <span className='title'>{podcast.name}</span>
            <p className='author'>Author: {podcast.artist}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function NoPodcastResults () {
  return <p>No results</p>
}
