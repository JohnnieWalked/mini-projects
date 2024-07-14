import React from 'react';
import styled from 'styled-components';
import triangle from '../../../assets/icons/triangle.svg';
import type { Direction } from '../../../types';

type DividerProps = {
  className: string;
  direction: Direction;
};

const DividerWrapper = styled.div<{
  $backgroundSrc: string;
  $direction: Direction;
}>`
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${({ $backgroundSrc }) => `url(${$backgroundSrc}) repeat-x`};
    background-position: 0 calc(100% / 2);
    background-size: 20% 100%;
    rotate: ${({ $direction }) => {
      if ($direction === 'right') return '0deg';
    }};
    animation: animatedBackground 5s linear infinite;
    filter: invert(4%) sepia(10%) saturate(4490%) hue-rotate(329deg)
      brightness(94%) contrast(95%);
  }

  @keyframes animatedBackground {
    from {
      background-position: 0 0;
    }
    /*use negative width if you want it to flow right to left else and positive for left to right*/
    to {
      background-position: 200% 0;
    }
  }
`;

export default function Divider({ className, direction }: DividerProps) {
  return (
    <DividerWrapper
      $direction={direction}
      $backgroundSrc={triangle}
      className={className}
    />
  );
}
