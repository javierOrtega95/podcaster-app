import { Outlet } from 'react-router'
import { Header } from '../header/Header'

export function Layout () {
  return (
      <>
        <Header />
        <main className='main'>
          <Outlet />
        </main>
      </>
  )
}
