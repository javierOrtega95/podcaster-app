import { Outlet, useNavigation } from 'react-router'
import { Link } from 'react-router-dom'
import './header.css'
import { Loader } from '../loader/Loader'

export function Header () {
  const { state } = useNavigation()
  const isLoading = state === 'loading'

  return (
    <>
      <header className='header'>
        <Link to='/'>
          <h1>Podcaster</h1>
        </Link>
        {isLoading && <Loader />}
      </header>
      <Outlet />
    </>
  )
}
