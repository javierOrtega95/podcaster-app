import { useRoutes } from 'react-router'
import './App.css'
import { routes } from './routes'
import { Header } from './components/header/Header'

function App () {
  const routesElement = useRoutes(routes)
  return (
    <>
      <Header />
      {routesElement}
    </>
  )
}

export default App
