import { Card } from '../../../components/card/Card'
import './podcastSidebar.css'

interface Props {
  imageUrl: string
  description: string
  author: string
  title: string
}

export function PodcastSidebar ({
  imageUrl,
  title,
  author,
  description
}: Props) {
  return (
    <aside className='podcast-sidebar'>
      <Card>
        <img src={imageUrl} alt={`Image of ${title} podcast`} />
        <div className='border' />
        <div className='body'>
          <h3 className='title'>{title}</h3>
          <span className='emphasized'>by {author}</span>
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
