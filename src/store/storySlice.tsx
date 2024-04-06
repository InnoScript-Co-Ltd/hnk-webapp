import { USER_JOURNEY } from '@/constants/keys';
import { USER_STORY } from '@/models/story.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialUserJourney = localStorage.getItem(USER_JOURNEY);

const initialState: USER_STORY = initialUserJourney ? JSON.parse(initialUserJourney) : {
  is_over_twentyone: false,
  name: "",
  phone: "",
  email: "",
  tc_accept: false,
  is_campaign: false,
  fav_music: [],
  authToken: ""
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
