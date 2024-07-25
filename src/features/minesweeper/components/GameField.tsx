/* constants */
import { useEffect, useState } from 'react';
import {
  BEGINNER_GAMEFIELD_SIZE,
  INTERMEDIATE_GAMEFIELD_SIZE,
  EXPERT_GAMEFIELD_SIZE,
} from '../../../constants';

/* components */
import Square from './Square';
import styled from 'styled-components';

type GameFieldWrapperParams = {
  $x: number;
  $y: number;
};

const GameFieldWrapper = styled.div<GameFieldWrapperParams>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.$x}, max-content);`};
  grid-template-rows: ${(props) => `repeat(${props.$y}, max-content);`};
`;

export default function GameField() {
  const [difficulty, setDifficulty] = useState(BEGINNER_GAMEFIELD_SIZE);
  const [gamefield, SetGameField] = useState<[][] | null>(null);

  return (
    <GameFieldWrapper
      $x={difficulty[0]}
      $y={difficulty[1]}
      className="gamefield"
    ></GameFieldWrapper>
  );
}
