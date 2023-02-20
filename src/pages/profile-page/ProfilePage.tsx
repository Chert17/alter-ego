import { Box, Button, Container, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { setAuth } from '../../redux/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const ProfilePage: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const name = useAppSelector(state => state.auth.userName);

  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="subtitle1" component="p">
          {t('hello')} {name}
        </Typography>
        <img
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="user"
          width={270}
        />
        <Button
          onClick={() => dispatch(setAuth({ isAuth: false, userName: '' }))}
          variant="outlined"
        >
          {t('logout')}
        </Button>
      </Box>
    </Container>
  );
};

export default ProfilePage;
