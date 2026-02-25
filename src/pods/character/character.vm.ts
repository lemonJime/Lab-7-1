export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  episode: string[]
  url: string
  created: string
  originName: string
  locationName: string
}

export const createEmptyCharacter = (): Character => ({
  id: 100,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  image: '',
  episode: [],
  url: '',
  created: '',
  originName: '',
  locationName: ''
});
