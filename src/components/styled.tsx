import styled from 'styled-components';
import type { Colors } from '../types';

interface SectionBgColor {
  $bgColor?: Colors;
  $opacity?: number;
}
interface GradientProps {
  $deg: number;
  $firstColor: Colors;
  $secondColor: Colors;
}
interface TextColor {
  $color?: Colors;
}

const getGradient = (props: GradientProps) =>
  `linear-gradient(${props.$deg}deg, hsl(var(--${props.$firstColor})), hsl(var(--${props.$secondColor})))`;
const getColor = (props: TextColor) =>
  props.$color ? `hsl(var(--${props.$color}))` : `hsl(var(--text))`;

export namespace S {
  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  `;
  export const Section = styled.section<SectionBgColor>`
    background-color: ${({ $bgColor, $opacity = 1 }) =>
      `hsla(var(--${$bgColor}), ${$opacity})`};
    border-radius: calc(0.5rem + 1rem);
    padding: 1rem;
  `;
  export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  `;

  /* --------------------------------------------------------------------------------------------------------------------------------------- */

  export const Button = styled.button`
    width: fit-content;
    font-size: 1rem;
    padding: 0.5rem;
  `;

  export const Header = styled.h1<TextColor>`
    width: fit-content;
    font-size: clamp(1.25rem, 2rem, 2.5rem);
    color: ${getColor};
  `;
  export const StyledHeader = styled(Header)<GradientProps>`
    background-image: ${getGradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  export const Subheader = styled.h2<TextColor>`
    width: fit-content;
    font-size: clamp(1rem, 1.5rem, 2rem);
    color: ${getColor};
  `;
  export const StyledSubheader = styled(Subheader)<GradientProps>`
    background-image: ${getGradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  export const TitleUnderline = styled.span<{ $color: Colors }>`
    width: 100%;
    height: 0.3rem;
    background-color: ${(props) => `hsl(var(--${props.$color}))`};
    clip-path: polygon(0 0, 100% 0, 100% 40%, 13% 40%, 7% 100%, 0 100%);
    transition: background-color 0.3s ease-in-out;
  `;

  export const H3Header = styled.h3`
    font-size: clamp(0.9rem, 5vw, 2rem);
    color: hsl(var(--primary));
  `;
  export const Paragraph = styled.p`
    padding-bottom: 0.5rem;

    &:last-child {
      padding-bottom: 0;
    }
  `;
}
