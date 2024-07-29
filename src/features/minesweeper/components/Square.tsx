import React, { useEffect, useState } from 'react';

/* rtk */
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { minesweeperSliceActions } from '../../../store/slices/minesweeperSlice';
import { RootState } from '../../../store';

/* icons and styles */
import { TbFlag3Filled } from 'react-icons/tb';
import styled from 'styled-components';

/* helpers */
import { sleep } from '../../../helpers';

type StyledSquareParams = {
  $isOpen: boolean;
  $isFlagged: boolean;
  $hasBomb?: boolean;
};

type SquareProps = {
  animationSquare?: boolean;
  className?: string;
  children?: React.ReactNode;
  openedExample?: boolean;
  hasBomb?: boolean;
};

const StyledSquare = styled.button<StyledSquareParams>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.1rem;
  padding: 0;
  width: 2rem;
  height: 2rem;

  border: ${(props) =>
    props.$isOpen
      ? `0.2rem inset hsla(var(--primary), 0);`
      : `0.2rem outset hsla(var(--primary), 1);`};
  background-color: ${(props) => {
    if (props.$isOpen) {
      if (props.$hasBomb) {
        return `hsl(var(--secondary))`;
      }
      return `hsla(var(--primary), 0.1)`;
    }
    return `hsla(var(--primary), 0.6)`;
  }};
  pointer-events: ${(props) => (props.$isOpen ? 'none' : 'auto')};
  transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out,
    filter 0.2s linear;

  font-family: inherit;
  font-size: 100%;
  color: hsl(var(--text));
  cursor: pointer;

  &:active {
    border: 0.2rem inset hsla(var(--primary), 0.1);
    background-color: hsla(var(--primary), 0.3);
  }
  &:hover {
    filter: brightness(120%);
  }

  svg {
    margin: 0.2rem;
    width: 100%;
    height: 100%;
    color: ${(props) => {
      if (props.$hasBomb) {
        return `hsl(var(--text))`;
      }
      return `hsl(var(--secondary))`;
    }};
  }
`;

export default function Square({
  children,
  className,
  animationSquare,
  openedExample,
  hasBomb,
}: SquareProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlagged, setIsFlagged] = useState(false);
  const { gameOver, mode } = useAppSelector(
    (state: RootState) => state.minesweeper
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (openedExample) setIsOpen(true);
  }, [openedExample]);

  useEffect(() => {
    if (gameOver && hasBomb) setIsOpen(true);
  }, [gameOver]);

  async function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    /* left click */
    if (e.type === 'click') {
      /* in case FLAG mode */
      if (mode === 'flag') {
        setIsFlagged(!isFlagged);
        return;
      }

      /* in case DIG mode */
      if (isFlagged === true) return;
      setIsOpen(true);

      /* if user click on squares that are a part of a game */
      if (hasBomb && !animationSquare) {
        dispatch(minesweeperSliceActions.setGameOver(true));
      }

      /* if user click on squares that located in GUIDE section */
      if (animationSquare) {
        await sleep(3000);
        setIsOpen(false);
      }
    }

    /* right click */
    if (e.type === 'contextmenu') {
      e.preventDefault();
      setIsFlagged(!isFlagged);
    }
  }

  return (
    <StyledSquare
      tabIndex={isOpen ? -1 : 0}
      onContextMenu={handleClick}
      onClick={handleClick}
      className={className}
      $isOpen={isOpen}
      $isFlagged={isFlagged}
      $hasBomb={hasBomb}
    >
      {isOpen && children}
      {isFlagged && <TbFlag3Filled />}
    </StyledSquare>
  );
}
