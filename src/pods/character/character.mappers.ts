import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,  
  gender: character.gender,
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created,
  originName: character.origin.name ? character.origin.name : '',
  locationName: character.location.name ? character.location.name : ''
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    image: character.image,
    episode: character.episode,
    url: character.url,
    created: character.created,
    origin: character.originName ? { name: character.originName } : undefined,
    location: character.locationName ? { name: character.locationName } : undefined
  } as unknown) as apiModel.Character);
