import { useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')

  return { search, updateSearch: setSearch }
}
