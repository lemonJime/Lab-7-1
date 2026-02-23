import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

// export const mapFromApiToVm = (
//   character: apiModel.CharacterEntityApi
// ): viewModel.CharacterEntityVm => ({
//   id: character.id,
//   picture: character.thumbNailUrl,
//   name: character.name,
//   description: character.shortDescription,
//   rating: character.hotelRating,
//   address: character.address1,
// });

export const mapFromApiToVm = (
  character: apiModel.Result
): viewModel.CharacterEntityVm => ({

  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created

});
