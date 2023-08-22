import { useLoaderData } from 'react-router'
import { type Podcast } from '../../models/Podcast.model'
import { Podcasts } from './components/Podcasts'
import './home.css'

export function Home () {
  const podcasts = useLoaderData() as Podcast[]

  return <Podcasts podcasts={podcasts} />
}
