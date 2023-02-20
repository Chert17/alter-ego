import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

type TypeAuthState = {
  isAuth: boolean;
  userName: string;
};

const initialState: TypeAuthState = {
  isAuth: false,
  userName: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<TypeAuthState>) {
      state.isAuth = action.payload.isAuth;
      state.userName = action.payload.userName;
    },
  },
});

export const { setAuth } = authSlice.actions;

//persist

const persistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['isAuth'],
};

export const authSlicerPersistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
