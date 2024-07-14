import React from 'react';

/* styles */
import { S } from '../styled';

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <S.Button>{children}</S.Button>;
}
