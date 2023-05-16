/* @jsxImportSource @emotion/react */
import React, { ReactNode, useContext } from 'react';
import { css } from '@emotion/react';
import ThemeProvider, { Theme } from './ComponentProvider';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  /**
   * a new context injection for merge it with the default one
   */
  overrides?: object;
  /**
   * class names
   */
  classes?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  overrides,
  classes,
}: ButtonProps) => {
  const theme = useContext(Theme);
  css();
  return (
    <ThemeProvider overrides={overrides}>
      <button type="button" className={classes} css={theme}>
        {children}
      </button>
    </ThemeProvider>
  );
}