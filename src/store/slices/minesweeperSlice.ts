import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { BEGINNER_GAMEFIELD_SIZE } from '../../constants';

type Minesweeper = {
  gameOver: boolean;
  difficulty: number[];
  mode: 'flag' | 'dig';
};

const initialState: Minesweeper = {
  gameOver: false,
  difficulty: BEGINNER_GAMEFIELD_SIZE,
  mode: 'dig',
};

export const minesweeperSlice = createSlice({
  name: 'minesweeper',
  initialState,
  reducers: {
    setGameOver(state, action: PayloadAction<boolean>) {
      state.gameOver = action.payload;
    },
    toggleMode(state) {
      state.mode === 'dig' ? (state.mode = 'flag') : (state.mode = 'dig');
    },
  },
});

export const minesweeperSliceActions = minesweeperSlice.actions;
