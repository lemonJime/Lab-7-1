import { CharacterEntityApi } from './character-collection.api-model';
import { mockHotelCollection } from './character-collection.mock-data';
import * as apiModel from './index'

let characterCollection = [...mockHotelCollection];
const url = 'https://rickandmortyapi.com/api/character';

// export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
//   return characterCollection;
// };

export const getCharacterCollection = async (): Promise<apiModel.Result[]> => {
  const response = await fetch(url);
  const data : apiModel.CharacterEntityApi = await response.json();

  return data.results;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  //characterCollection = characterCollection.filter((h) => h.id !== id);
  console.log('deleteCharacter', id);
  return true;
};
