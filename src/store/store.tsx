/** 
Component Name              - App Redux Store
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import { configureStore } from '@reduxjs/toolkit';
import storyReducer from "./storySlice";
import modalReducer from './modalSlice';
import { USER_STORY } from '@/models/story.model';
import { IModal } from '@/models/reduxmodal.model';

const store = configureStore({
  reducer: {
    story: storyReducer,
    modal: modalReducer
  },
});

export default store;

export interface IReducer {
  story: USER_STORY;
  modal: IModal
}
