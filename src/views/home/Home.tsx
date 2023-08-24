import { Badge } from '../../components/badge/Badge'
import { usePodcasts } from '../../hooks/usePodcasts'
import { useSearch } from '../../hooks/useSearch'
import { PodcastSearch } from './components/PodcastSearch'
import { Podcasts } from './components/Podcasts'
import './home.css'

export function Home () {
  const { search, updateSearch } = useSearch()
  const { podcasts } = usePodcasts(search)

  return (
    <>
      <section className='search'>
        <Badge style={{ marginRight: 8 }}>{podcasts.length}</Badge>
        <PodcastSearch value={search} onSearch={updateSearch} />
      </section>
      <Podcasts podcasts={podcasts} />
    </>
  )
}
