import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  gameOver: false,
};

export const minesweeperSlice = createSlice({
  name: 'minesweeper',
  initialState,
  reducers: {
    setGameOver(state, action: PayloadAction<boolean>) {
      state.gameOver = action.payload;
    },
  },
});

export const minesweeperSliceActions = minesweeperSlice.actions;
