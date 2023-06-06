import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: { position: number } = {
  position: 0
}


export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPosition (state, action: PayloadAction<number>) {
      state.position = action.payload;
    },  

  },
})


export const { setScrollPosition } = scrollSlice.actions;

export default scrollSlice.reducer;