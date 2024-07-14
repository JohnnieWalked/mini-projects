import styled from 'styled-components';

type Colors = 'primary' | 'secondary' | 'accent' | 'background' | 'text';

interface SectionBgColor {
  $bgColor?: Colors;
}
interface GradientProps {
  $deg: number;
  $firstColor: Colors;
  $secondColor: Colors;
}

const getGradient = (props: GradientProps) =>
  `linear-gradient(${props.$deg}deg in hsl shorter hue, hsl(var(--${props.$firstColor})), hsl(var(--${props.$secondColor})))`;

export namespace S {
  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  `;
  export const Section = styled.section<SectionBgColor>`
    background-color: ${({ $bgColor }) => `hsl(var(--${$bgColor}))`};
    border-radius: 1rem;
    padding: 1.5rem;
  `;

  /* --------------------------------------------------------------------------------------------------------------------------------------- */

  export const Button = styled.button``;

  export const Header = styled.h1`
    font-size: clamp(1rem, 7vw, 2.5rem);
    color: hsl(var(--accent));
  `;
  export const StyledHeader = styled(Header)<GradientProps>`
    background-image: ${getGradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  export const Subheader = styled.h2`
    font-size: clamp(0.8rem, 5vw, 2rem);
    color: hsl(var(--primary));
  `;
  export const StyledSubheader = styled(Subheader)<GradientProps>`
    background-image: ${getGradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
