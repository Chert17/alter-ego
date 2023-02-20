import React, { FC } from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteNewsThunk } from '../../redux/news/thunkNews';
import { INews } from '../../types/news.interface';
import { useTranslation } from 'react-i18next';

const NewsItem: FC<INews> = ({ body, title, id }) => {
  const { t } = useTranslation();

  const isAuth = useAppSelector(state => state.auth.isAuth);
  const dispatch = useAppDispatch();

  return (
    <Box component="li" width="calc((100% - 2 * 30px) / 3)" display="flex">
      <Card>
        <CardContent
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography component="h3" variant="subtitle1">
              {title}
            </Typography>
            <Typography component="p" variant="caption" color="InfoText">
              {body}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="end">
            {isAuth && (
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => dispatch(deleteNewsThunk(id))}
              >
                {t('btn-delete')}
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsItem;
