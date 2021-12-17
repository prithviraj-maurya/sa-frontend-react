import { createSlice } from '@reduxjs/toolkit'

import data from '../../warehouse.json';

export const warehouse = createSlice({
  name: 'warehouse',
  initialState: {
    data: data
  },
  reducers: {
    update: (state, element) => {
      state.data.push(element);
    },
    remove: (state, element) => {
      state.data.slice(element);
    }
  }
})

// Action creators are generated for each case reducer function
export const { update, remove } = warehouse.actions

export default warehouse.reducer