import { useState } from 'react';

/* components */
import GameField from '../features/minesweeper/components/GameField';
import Divider from '../features/minesweeper/components/Divider';

/* styles */
import { S } from '../components/styled';

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
      <S.TitleWrapper>
        <S.Subheader>Rules</S.Subheader>
        <S.TitleUnderline $color="accent"></S.TitleUnderline>
      </S.TitleWrapper>
      <S.Section className="game-descr" /* $bgColor="primary" $opacity={0.2} */>
        <div className="game-descr__header">
          <S.StyledSubheader
            $firstColor="text"
            $secondColor="accent"
            $deg={120}
          >
            How to play?
          </S.StyledSubheader>
          <span>Quiet easy. Let's start!</span>
        </div>
        <div className="game-descr__step1">
          <div className="minesweeper-unopened-square animated-minesweeper-opened-square">
            <div className="mouse">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mouseicon">
                  <path
                    id="mouse-inner"
                    d="M11.5833 16.5417C11.5417 16.5417 11.5 16.5417 11.4167 16.5C11.3333 16.4583 11.25 16.375 11.1667 16.2917L9.62501 12.7083L7.75001 14.4583C7.70834 14.5417 7.62501 14.5833 7.50001 14.5833C7.45834 14.5833 7.37501 14.5833 7.33334 14.5417C7.20834 14.5 7.08334 14.3333 7.08334 14.1667V4.99999C7.08334 4.83333 7.16668 4.66666 7.33334 4.625C7.37501 4.58333 7.45834 4.58333 7.50001 4.58333C7.58334 4.58333 7.70834 4.62499 7.79168 4.70833L14.4583 10.9583C14.5833 11.0833 14.625 11.25 14.5833 11.4167C14.5417 11.5833 14.375 11.6667 14.2083 11.7083L11.5833 11.9583L13.2083 15.5C13.25 15.5833 13.25 15.7083 13.2083 15.8333C13.1667 15.9167 13.0833 16.0417 13 16.0833L11.7917 16.625C11.7083 16.5417 11.625 16.5417 11.5833 16.5417Z"
                    fill="black"
                  />
                  <path
                    id="mouse-outer"
                    d="M7.49999 5.00001L14.1667 11.25L10.9583 11.5417L12.8333 15.625L11.625 16.1667L9.83332 12.0417L7.49999 14.1667V5.00001ZM7.49999 4.16667C7.37499 4.16667 7.29166 4.20834 7.16666 4.25001C6.87499 4.37501 6.66666 4.66667 6.66666 5.00001V14.1667C6.66666 14.5 6.87499 14.7917 7.16666 14.9167C7.29166 15 7.41666 15 7.49999 15C7.70832 15 7.91666 14.9167 8.08332 14.7917L9.49999 13.4583L10.7917 16.5C10.875 16.7083 11.0417 16.875 11.25 16.9583C11.3333 17 11.4583 17 11.5417 17C11.6667 17 11.75 16.9583 11.875 16.9167L13.0833 16.375C13.2917 16.2917 13.4583 16.125 13.5417 15.9167C13.625 15.7083 13.625 15.4583 13.5417 15.2917L12.1667 12.2917L14.2083 12.125C14.5417 12.0833 14.8333 11.875 14.9167 11.5833C15.0417 11.2917 14.9583 10.9167 14.7083 10.7083L8.04166 4.45834C7.91666 4.25001 7.70832 4.16667 7.49999 4.16667Z"
                    fill="black"
                  />
                </g>
              </svg>
            </div>
          </div>
          Start by clicking any square to reveal it.
        </div>
        <div className="game-descr__step2">
          <div className="minesweeper-unopened-square"></div>A revealed number
          tells you how many mines are hidden in the eight squares surrounding
          it.
        </div>
        <div className="game-descr__step3">
          Choose "Flags" to mark squares as potentials mines.
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
            $secondColor="accent"
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
      <S.TitleWrapper>
        <S.Subheader>Game</S.Subheader>
        <S.TitleUnderline $color="accent"></S.TitleUnderline>
      </S.TitleWrapper>
      <S.Section className="game-settings" $bgColor="primary">
        <GameField />
        <div>
          <span>Difficulty selection</span>
        </div>
      </S.Section>
    </S.Container>
  );
}
