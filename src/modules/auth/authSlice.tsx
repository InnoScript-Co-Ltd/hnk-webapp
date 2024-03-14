import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@reduxjs/toolkit/query';

const localStorageTokenKey = 'authToken';

interface AuthState {
  token: string | null;
}

const initialToken = localStorage.getItem(localStorageTokenKey);
const initialState: AuthState = {
  token: initialToken ?? null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
        console.log(state);
        
      state.token = action.payload;
      localStorage.setItem(localStorageTokenKey, action.payload);
    },
    getToken(state, action: PayloadAction<string>) {
        state.token = action.payload;
        localStorage.getItem(localStorageTokenKey);
    },
    clearToken(state) {
      state.token = null;
      localStorage.removeItem(localStorageTokenKey);
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
