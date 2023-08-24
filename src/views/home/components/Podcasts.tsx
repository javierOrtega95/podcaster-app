import { Link } from 'react-router-dom'
import { Card } from '../../../components/card/Card'
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
        <Link key={podcast.id} to={`/podcast/${podcast.id}`}>
          <Card>
            <div className='podcast-image'>
              <img src={podcast.image} alt={podcast.name} />
            </div>
            <div className='podcast-body'>
              <p className='title'>{podcast.name}</p>
              <p className='author'>Author: {podcast.artist}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

function NoPodcastResults () {
  return <p>No results</p>
}
