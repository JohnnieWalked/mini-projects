import { useEffect, useState } from 'react';

/* components */
import GameField from '../features/minesweeper/components/GameField';
import Divider from '../features/minesweeper/components/Divider';
import Square from '../features/minesweeper/components/Square';

/* styles */
import { S } from '../components/styled';
import { FaBomb } from 'react-icons/fa';
import ToggleModeButton from '../features/minesweeper/components/ToggleModeButton';

export default function MinesweeperPage() {
  return (
    <S.Container>
      <S.StyledHeader
        style={{ display: 'flex', alignSelf: 'center' }}
        $firstColor="text"
        $secondColor="accent"
        $deg={120}
      >
        Minesweeper
      </S.StyledHeader>
      <S.Subheader>Rules</S.Subheader>
      <S.Section
        $bgColor="primary"
        $opacity={0.15}
        className="game-descr" /* $bgColor="primary" $opacity={0.2} */
      >
        <div className="game-descr__header">
          <S.StyledSubheader
            $firstColor="text"
            $secondColor="primary"
            $deg={120}
          >
            How to play?
          </S.StyledSubheader>
          <span>Quiet easy. Let's start!</span>
        </div>
        <div className="game-descr__step1">
          <Square animationSquare={true}>1</Square>
          Start by clicking any square to reveal it.
        </div>
        <div className="game-descr__step2">
          <div style={{ display: 'flex' }}>
            <Square openedExample animationSquare={true}>
              2
            </Square>
            <Square openedExample animationSquare={true}>
              4
            </Square>
            <Square openedExample animationSquare={true}>
              7
            </Square>
          </div>
          A revealed number tells you how many mines are hidden in the eight
          squares surrounding it.
        </div>
        <div className="game-descr__step3">
          <div className="flag-example-wrapper">
            <div className="flag-example">
              <Square hasBomb animationSquare={true}>
                <FaBomb />
              </Square>
              <Square hasBomb animationSquare={true}>
                <FaBomb />
              </Square>
              <Square openedExample animationSquare={true}>
                3
              </Square>
              <Square hasBomb animationSquare={true}>
                <FaBomb />
              </Square>
            </div>
            <ToggleModeButton />
          </div>
          Choose "Flags" to mark squares as potentials mines. You can use left
          click or toggle special button. Icon which is located inside this
          button represents current click-mode (reveal square or place flag).
        </div>
        <div className="game-descr__win">
          <S.StyledSubheader
            $firstColor="text"
            $secondColor="accent"
            $deg={120}
          >
            Victory
          </S.StyledSubheader>
          You win if you uncover all safe squares without hitting a mine.
        </div>
        <div className="game-descr__lose">
          <S.StyledSubheader
            $firstColor="text"
            $secondColor="secondary"
            $deg={120}
          >
            Defeat
          </S.StyledSubheader>
          Clicking a mine explodes all hidden mines, revealing the board, and
          ending the game.
        </div>
        <Divider angle={0} className="game-descr__divider1" />
        <Divider angle={0} className="game-descr__divider2" />
        <Divider angle={180} className="game-descr__divider3" />
        <Divider angle={180} className="game-descr__divider4" />
        <Divider angle={90} className="game-descr__divider5" />
      </S.Section>
      <S.Subheader>Game</S.Subheader>
      <S.Section $bgColor="primary" $opacity={0.1} className="game-section">
        <GameField />
        <div>
          <span>Difficulty selection</span>
        </div>
      </S.Section>
    </S.Container>
  );
}
