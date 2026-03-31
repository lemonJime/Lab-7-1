
import * as apiModel from './index'


export const getCharacterCollection = async (name?: string, page?: number): Promise<apiModel.CharacterEntityApi> => {

  const url = 'https://rickandmortyapi.com/api/character';
  const nameQuery = name ? `name=${name}` : '';
  const pageQuery = page ? `page=${page}` : '';
  const queryParams = nameQuery && pageQuery ? `${nameQuery}&${pageQuery}` : `${nameQuery}${pageQuery}`;
  const finalUrl = queryParams ? `${url}?${queryParams}` : url;

  const response = await fetch(finalUrl);
  const data: apiModel.CharacterEntityApi = await response.json();

  return data;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  console.log('deleteCharacter', id);
  return true;
};
