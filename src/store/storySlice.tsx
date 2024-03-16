import { USER_JOURNEY } from '@/constants/keys';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface USER_STORY {
  is_over_twentyone: boolean;
  name: string;
  phone: string;
  email: string;
  tc_accept: boolean;
}

const initialUserJourney = localStorage.getItem(USER_JOURNEY);
const initialState: USER_STORY = initialUserJourney ? JSON.parse(initialUserJourney) : {
  is_over_twentyone: false
};

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    storyUpdate(state: USER_STORY | null, action: PayloadAction<USER_STORY>) {
      state = action.payload;
      localStorage.setItem(USER_JOURNEY, JSON.stringify(action.payload));
      return state;
    },
  },
});

export const { storyUpdate } = storySlice.actions;
export default storySlice.reducer;
