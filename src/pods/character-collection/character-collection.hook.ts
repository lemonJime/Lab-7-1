import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';


export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  const loadCharacterCollection = (term?: string, page?: number) => {
    const nameToQuery = term ?? searchTerm;
    const pageToQuery = page ?? currentPage;

    getCharacterCollection(nameToQuery, pageToQuery).then((result) => {
      setCharacterCollection(mapToCollection(result.results, mapFromApiToVm))
      setTotalPages(result.info.pages);
    });
  };

  const handleSearchTerm = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); 
    loadCharacterCollection(term, 1); 
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    loadCharacterCollection(undefined, page);
  }

  return { characterCollection, loadCharacterCollection, searchTerm, currentPage, handleSearchTerm, handlePageChange, totalPages };
};
