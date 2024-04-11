/** 
Component Name              - Moddal Redux Slice
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import { IModal } from '@/models/reduxmodal.model';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IModal = {
    isOpen: false,
    title: '',
    message: '',
    theme: 'success'
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
        state.isOpen = true;
        state.title = action.payload.title;
        state.message = action.payload.message;
        state.theme = action.payload.theme;
    },
    closeModal(state){
        state.isOpen = false;
        state.title = initialState.title;
        state.message = initialState.message;
        state.theme = initialState.theme;
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
