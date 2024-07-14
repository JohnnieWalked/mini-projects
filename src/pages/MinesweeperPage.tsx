/* components */
import GameField from '../features/minesweeper/components/GameField';
import Divider from '../features/minesweeper/components/Divider';

/* styles */
import { S } from '../components/styled';

export default function MinesweeperPage() {
  return (
    <S.Container>
      <S.StyledHeader $firstColor="accent" $secondColor="text" $deg={70}>
        Minesweeper
      </S.StyledHeader>
      <S.Section className="game-descr" $bgColor="primary">
        <div className="game-descr__header">
          <S.StyledSubheader
            $firstColor="text"
            $secondColor="primary"
            $deg={70}
          >
            How to play?
          </S.StyledSubheader>
          <span>Quiet easy. Let's start!</span>
        </div>
        <div className="game-descr__step1">
          <div className="minesweeper-unopened-square"></div>
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
          You win if you uncover all safe squares without hitting a mine.
        </div>
        <div className="game-descr__lose">
          Clicking a mine explodes all hidden mines, revealing the board, and
          ending the game.
        </div>
        <Divider direction="left" className="game-descr__divider1" />
        <Divider direction="left" className="game-descr__divider2" />
        <Divider direction="right" className="game-descr__divider3" />
        <Divider direction="right" className="game-descr__divider4" />
        <Divider direction="bottom" className="game-descr__divider5" />
      </S.Section>
      <S.Section className="game-settings" $bgColor="primary">
        <GameField />
        <div>
          <span>Difficulty selection</span>
        </div>
      </S.Section>
    </S.Container>
  );
}
