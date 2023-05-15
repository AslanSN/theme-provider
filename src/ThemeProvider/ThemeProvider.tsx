import React, {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
  CSSProperties,
} from "react";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const maTheme = {
  "--primary-color": "#0084c9",
  "--widget-birthdays": "#7a03f1",
  backgroundColor: "var(--widget-birthdays)",
  width: "100svw",
  height: "100svh",
};

type MaThemeSchema = CSSProperties & typeof maTheme

const Theme = createContext<MaThemeSchema>(maTheme);

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
}: PropsWithChildren<ThemeProviderProps>): any => {
  const theme = useContext(Theme);

  return (
    <Theme.Provider value={theme}>
      <div style={theme}>{children}</div>
    </Theme.Provider>
  );
};

