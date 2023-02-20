import { Container } from '@mui/material';
import React, { FC } from 'react';
import NewsList from '../../components/news-list/NewsList';

const NewsPage: FC = () => {
  return (
    <Container>
      <NewsList />
    </Container>
  );
};

export default NewsPage;
