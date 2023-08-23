import { useNavigation } from 'react-router'
import { Link } from 'react-router-dom'
import { Loader } from '../../../components/loader/Loader'
import './header.css'

export function Header () {
  const { state } = useNavigation()
  const isLoading = state === 'loading'

  return (
    <>
      <header className='header'>
        <nav>
          <Link to='/'>
            <h1>Podcaster</h1>
          </Link>
        </nav>
        {isLoading && <Loader />}
      </header>
    </>
  )
}
