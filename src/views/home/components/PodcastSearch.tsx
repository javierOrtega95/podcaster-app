interface Props {
  value: string
  onSearch: (value: string) => void
}

export function PodcastSearch ({ value, onSearch }: Props) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value
    onSearch(newSearch)
  }

  return (
    <input
      name='search'
      placeholder='Filter podcasts...'
      onChange={handleSearch}
      value={value}
    />
  )
}
