/* constants */
import { useState } from 'react';
import {
  BEGINNER_GAMEFIELD_SIZE,
  INTERMEDIATE_GAMEFIELD_SIZE,
  EXPERT_GAMEFIELD_SIZE,
} from '../../../constants';

/* components */
import Square from './Square';

export default function GameField() {
  const [difficulty, setDifficulty] = useState(BEGINNER_GAMEFIELD_SIZE);

  return (
    <div>
      GameField
      <Square />
    </div>
  );
}
