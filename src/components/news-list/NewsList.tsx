import { Box, Button } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Status } from '../../constants/status';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getNewsThunk } from '../../redux/news/thunkNews';
import NewsItem from '../news-item/NewsItem';
import NewsSkeleton from '../skeleton/NewsSkeleton';

const NewsList: FC = () => {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(3);
  const news = useAppSelector(state => state.news.news);
  const status = useAppSelector(state => state.news.status);

  const dispatch = useAppDispatch();

  const showMoreItems = () => {
    setVisible(prevState => prevState + 3);
  };

  useEffect(() => {
    dispatch(getNewsThunk());
  }, [dispatch]);

  if (status === Status.LOADING) return <NewsSkeleton />;

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          component="ul"
          display="flex"
          gap="30px"
          flexWrap="wrap"
          marginBottom={4}
        >
          {news.slice(0, visible).map(item => (
            <NewsItem key={item.id} {...item} />
          ))}
        </Box>
        <Button onClick={showMoreItems} variant="outlined">
          {t('btn-load-more')}
        </Button>
      </Box>
    </>
  );
};

export default NewsList;
