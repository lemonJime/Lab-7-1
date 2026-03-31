import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Box, Container, Paper, TextField } from '@mui/material';
import { PaginationComponent } from './components/pagination.component';

interface Props {
  characterCollection: CharacterEntityVm[];
  searchTerm: string;
  currentPage: number;
  totalPages: number;
  onCreateCharacter: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onHandleSearchTerm: (term: string) => void;
  onHandlePageChange: (page: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    onCreateCharacter,
    onEdit,
    onDelete,
    searchTerm,
    onHandleSearchTerm,
    currentPage,
    totalPages,
    onHandlePageChange,
  } = props;

  return (
    <>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <TextField
            label="Busca a un personaje"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => onHandleSearchTerm(e.target.value)}
            placeholder="Encuentra a tu personaje preferido"
            sx={{ flexGrow: 1, minWidth: 250 }}
          />
        </Box>
      </Paper>

      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={onCreateCharacter}>
          Add character
        </Button>

        <ul className={classes.list}>
          {characterCollection.map((character) => (
            <li key={character.id}>
              <CharacterCard
                character={character}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onHandlePageChange={onHandlePageChange}
        />
      </div>
    </>
  );
};
