/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { css, Interpolation, Theme } from '@emotion/react';
import { Button } from '@aslanstaub/demo-app.button';

export type CardProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  styles?: Interpolation<Theme>;
};

export function Card({ children, styles }: CardProps) {
  const cardStyles = css`
  width: 10rem;
  height: 20rem;
  padding: 1rem;
  background: linear-gradient(#ff9ef9, pink);
  border-radius: 0.5rem;
  display: grid;
  grid-template:
    'main' 1fr
    'footer' 5rem;
  justify-items: center;
  align-items: center;
`;

  return (
    <div css={styles || cardStyles}>
      <main css={{ gridArea: 'main' }}>
        <h1>I'm a Card!</h1>
      </main>
      <footer css={{ gridArea: 'footer' }}>
        <Button>Next</Button>
      </footer>

      {children}
    </div>
  );
}