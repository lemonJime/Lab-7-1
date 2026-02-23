import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';


export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) => {
      //console.log(`Result de getCharacterCollection: ${ JSON.stringify(result)}`);
      //console.log(`Result de mapToCollection: ${ JSON.stringify(mapToCollection(result, mapFromApiToVm))}`);
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    }
    );
  };

  return { characterCollection, loadCharacterCollection };
};
