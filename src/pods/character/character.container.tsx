import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { Lookup } from '#common/models';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter()); // TO-DO: Cambiar el modelo de Hotel por el de Character. Además, crear un createEmptyCharacter een base a dicho modelo.
  const [genders, setGenders] = React.useState<Lookup[]>([]); // ¿VERDADERAMENTE LO NECESITO ?Aquí no hace falta nada. Simplemente coge un nombre y un id. 
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCharactersCollection = async () => {
    const apiGenders = await api.getGenders(); // TO-DO : Aquí también tiene que volver a obtener la colección entera de characters.
    console.log(`¿Qué estoy recibiendo de getGenders? ${ JSON.stringify(apiGenders)}`); 
    setGenders(apiGenders);
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id); // TO-DO: Aquí también tiene que obtener un character concreto en base al id.
    console.log(`¿Qué estoy recibiendo de getCharacter? ${ JSON.stringify(apiCharacter)}`);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    handleLoadCharactersCollection();
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character); // TO-DO: Aquí también tiene que mapear el character de vm a api.  
    console.log(`¿Qué estoy recibiendo de apiCharacter en handleSave? ${ JSON.stringify(apiCharacter)}`);

    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} genders={genders} onSave={handleSave} />;
};
