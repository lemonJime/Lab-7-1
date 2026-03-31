import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection, handleSearchTerm, searchTerm, currentPage, totalPages, handlePageChange } = useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateHotel = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: number) => {  
    navigate(linkRoutes.editCharacter(id.toString()));
  };

  const handleDelete = async (id: number) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      searchTerm={searchTerm}
      onCreateCharacter={handleCreateHotel}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onHandleSearchTerm={handleSearchTerm}
      currentPage={currentPage}
      totalPages={totalPages}
      onHandlePageChange={handlePageChange}
    />
  );
};
