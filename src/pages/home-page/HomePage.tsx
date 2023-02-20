import { Box, Container, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Typography
          border="2px solid black"
          borderRadius={8}
          width="40%"
          padding={4}
          component="h2"
        >
          {t('home-page-text')}
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
