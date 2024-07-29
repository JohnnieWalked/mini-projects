import React from 'react';

/* rtk */
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { minesweeperSliceActions } from '../../../store/slices/minesweeperSlice';

/* icons and styles */
import { TbFlag3Filled } from 'react-icons/tb';
import { GiSpade } from 'react-icons/gi';
import styled from 'styled-components';

const StyledToggleButton = styled.button`
  padding-block: 0.5rem;
  padding-inline: 1rem;
  border-radius: 1rem;
  border: outset 3px hsl(var(--text));
  cursor: pointer;
  color: hsl(var(--text));

  background-color: hsla(var(--background), 0.5);

  transition: translate 0.1s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover,
  &:focus-visible {
    color: hsl(var(--accent));
    border-color: hsl(var(--accent));
    background-color: hsla(var(--background), 1);
  }

  &:active {
    translate: -1px 2px;
  }
`;

export default function ToggleModeButton() {
  const { mode } = useAppSelector((state) => state.minesweeper);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(minesweeperSliceActions.toggleMode());
  }

  return (
    <StyledToggleButton onClick={handleClick}>
      {mode === 'flag' ? <TbFlag3Filled /> : <GiSpade />}
    </StyledToggleButton>
  );
}
