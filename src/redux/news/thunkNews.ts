import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteNewservice, getNewsService } from '../../service/news-service';
import { AxiosError } from 'axios';
import { INews } from '../../types/news.interface';

export const getNewsThunk = createAsyncThunk<
  INews[],
  undefined,
  { rejectValue: string }
>('news/fetchNews', async (_, { rejectWithValue }) => {
  try {
    const data = await getNewsService();

    return data;
  } catch (error) {
    const err = error as AxiosError;

    return rejectWithValue(err.message);
  }
});

export const deleteNewsThunk = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>('news/deleteNews', async (id, { rejectWithValue }) => {
  try {
    console.log(id);

    await deleteNewservice(id);

    return id;
  } catch (error) {
    const err = error as AxiosError;

    return rejectWithValue(err.message);
  }
});
