import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/status';
import { INews } from '../../types/news.interface';
import { deleteNewsThunk, getNewsThunk } from './thunkNews';

type TypeNewsState = {
  news: INews[];
  status: Status;
};

const initialState: TypeNewsState = {
  news: [],
  status: Status.IDLE,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNewsThunk.pending, state => {
        state.status = Status.LOADING;
      })
      .addCase(getNewsThunk.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.news = action.payload;
      })
      .addCase(getNewsThunk.rejected, state => {
        state.status = Status.REJECT;
      })
      .addCase(deleteNewsThunk.pending, state => {
        state.status = Status.LOADING;
      })
      .addCase(deleteNewsThunk.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.news = state.news.filter(item => item.id !== action.payload);
      })
      .addCase(deleteNewsThunk.rejected, state => {
        state.status = Status.REJECT;
      });
  },
});

export default newsSlice.reducer;
