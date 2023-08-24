import { Link } from 'react-router-dom'
import { Card } from '../../../components/card/Card'
import { type PodcastDetail } from '../../../models/PodcastDetail.model'
import './podcastSidebar.css'

interface Props {
  podcastDetail: PodcastDetail
}

export function PodcastSidebar ({ podcastDetail }: Props) {
  const { id, title, imageUrl, author, description } = podcastDetail
  return (
    <aside className='podcast-sidebar'>
      <Card>
        <Link to={`/podcast/${id}`}>
          <img src={imageUrl} alt={`Image of ${title} podcast`} />
        </Link>
        <div className='border' />
        <div className='body'>
          <h3 className='title'>{title}</h3>
          <span className='author emphasized'>
            <Link to={`/podcast/${id}`}>by {author}</Link>
          </span>
        </div>
        <div className='border' />
        <div className='footer'>
          <p className='description'>Description:</p>
          <p className='emphasized'>{description}</p>
        </div>
      </Card>
    </aside>
  )
}
