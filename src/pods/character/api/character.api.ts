import { Lookup } from '#common/models';
import * as apiModel from './index';

const url = 'https://rickandmortyapi.com/api/character';


export const getCharacter = async (id: string): Promise<apiModel.Character> => {
  const response = await fetch(`${url}/${id}`);
  const data: apiModel.Character = await response.json();
  return data;
};

export const getGenders = async (): Promise<Lookup[]> => {
  return [
    { id: 'Female', name: 'Female' },
    { id: 'Male', name: 'Male' },
    { id: 'Genderless', name: 'Genderless' },
    { id: 'unknown', name: 'Unknown' },
  ];
};

export const saveCharacter = async (character: apiModel.Character): Promise<boolean> => {
  return true;
};
