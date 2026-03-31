import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';

interface Props {
  currentPage: number;
  totalPages: number;
  onHandlePageChange: (page: number) => void;
}

export const PaginationComponent: React.FunctionComponent<Props> = (props) => {
  const { currentPage, totalPages, onHandlePageChange } = props;

  return (
    <Stack spacing={2} sx={{ mt: 4 }} alignItems="center">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => onHandlePageChange(page)}
        color="primary"
      />
    </Stack>
  );
};
