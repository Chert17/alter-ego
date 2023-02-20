import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import i18n from '../../18n';
import { useAppSelector } from '../../redux/hooks';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useTranslation } from 'react-i18next';

const Header: FC = () => {
  const { t } = useTranslation();

  const [language, setLanguage] = useLocalStorage('language', 'en');

  const handleLenguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const isAuth = useAppSelector(state => state.auth.isAuth);
  const tab = isAuth
    ? { label: t('profile'), path: '/profile' }
    : { label: t('login'), path: '/auth' };
  const location = useLocation();

  return (
    <AppBar position="static" style={{ marginBottom: 50 }}>
      <Toolbar>
        <Typography variant="h6" component="h1" marginRight={2}>
          ALTEREGO
        </Typography>
        <Tabs
          value={location.pathname}
          aria-label="nav tabs example"
          textColor="inherit"
          indicatorColor="secondary"
          style={{ width: '80%' }}
        >
          <Tab
            label={t('home-page-nav')}
            value="/"
            component={NavLink}
            to="/"
          />
          <Tab
            label={t('news-page-nav')}
            value="/news"
            component={NavLink}
            to="/news"
          />
          <Tab
            label={tab.label}
            value={tab.path}
            component={NavLink}
            to={tab.path}
            style={{ marginLeft: 'auto' }}
          />
        </Tabs>
        <Tabs
          value={language}
          textColor="inherit"
          indicatorColor="secondary"
          style={{ marginLeft: 20 }}
        >
          <Tab
            label={t('en')}
            value="en"
            onClick={() => handleLenguageChange('en')}
          />
          <Tab
            label={t('ua')}
            value="ua"
            onClick={() => handleLenguageChange('ua')}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
