/* assets and styles */
import triangle from '../../../assets/icons/triangle.svg';
import styled from 'styled-components';

type DividerProps = {
  className: string;
  angle: number;
};

const DividerWrapper = styled.div<{
  $backgroundSrc: string;
  $angle: number;
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
    rotate: ${({ $angle }) => `${$angle}deg`};
    animation: animatedBackground 5s linear infinite;
    filter: invert(70%) sepia(52%) saturate(320%) hue-rotate(191deg)
      brightness(95%) contrast(84%);
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

export default function Divider({ className, angle }: DividerProps) {
  return (
    <DividerWrapper
      $angle={angle}
      $backgroundSrc={triangle}
      className={className}
    />
  );
}
