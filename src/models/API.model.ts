export interface TopPodcastApiResponse {
  feed: Feed
}

export interface Feed {
  author: Author
  entry: ApiReponsePodcast[]
  updated: Updated
  rights: Rights
  title: Title
  icon: Icon
  link: Link[]
  id: Id
}

export interface Author {
  name: Name
  uri: Uri
}

export interface Name {
  label: string
}

export interface Uri {
  label: string
}

export interface ApiReponsePodcast {
  id: Id
  'im:name': ImName
  'im:image'?: ImImage[]
  summary?: Summary
  'im:price'?: ImPrice
  'im:contentType'?: ImContentType
  rights?: Rights
  title?: Title
  link?: Link
  'im:artist'?: ImArtist
  category?: Category
  'im:releaseDate'?: ImReleaseDate
}

export interface ImName {
  label: string
}

export interface ImImage {
  label: string
  attributes: ImImageAttributes
}

export interface ImImageAttributes {
  height: string
}

export interface Summary {
  label: string
}

export interface ImPrice {
  label: string
  attributes: ImPriceAttributes
}

export interface ImPriceAttributes {
  amount: string
  currency: string
}

export interface ImContentType {
  attributes: ImContentTypeAttributes
}

export interface ImContentTypeAttributes {
  term: string
  label: string
}

export interface Rights {
  label: string
}

export interface Title {
  label: string
}

export interface Link {
  attributes: LinkAttributes
}

export interface LinkAttributes {
  rel: string
  type: string
  href: string
}

export interface Id {
  label: string
  attributes: IdAttributes
}

export interface IdAttributes {
  'im:id': string
}

export interface ImArtist {
  label: string
  attributes?: ImArtistAttributes
}

export interface ImArtistAttributes {
  href: string
}

export interface Category {
  attributes: CategoryAttributes
}

export interface CategoryAttributes {
  'im:id': string
  term: string
  scheme: string
  label: string
}

export interface ImReleaseDate {
  label: string
  attributes: ImReleaseDateAttributes
}

export interface ImReleaseDateAttributes {
  label: string
}

export interface Updated {
  label: string
}

export interface Icon {
  label: string
}
