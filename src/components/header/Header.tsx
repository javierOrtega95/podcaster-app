import { Outlet, useNavigation } from 'react-router'
import { Link } from 'react-router-dom'
import './Header.css'

export function Header () {
  const { state } = useNavigation()
  const isLoading = state === 'loading'
  console.log(isLoading)

  return (
    <>
      <header className='header'>
        <Link to='/'>
          <h1>Podcast</h1>
        </Link>
        {isLoading && <span>Loading...</span>}
      </header>
      <Outlet />
    </>
  )
}
