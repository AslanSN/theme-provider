import React, {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
  CSSProperties,
  useMemo,
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

type MaThemeSchema = CSSProperties & typeof maTheme;

const Theme = createContext<MaThemeSchema>(maTheme);

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
}: PropsWithChildren<ThemeProviderProps>): any => {
  const theme = useContext(Theme);

  useMemo(() => {
    const rootElement = document.querySelector("html");
    if (rootElement) {
      Object.entries(theme).forEach(([key, value]) => {
        rootElement.style.setProperty(key, value);
      });
    }
  }, []);

  return <Theme.Provider value={theme}>{children}</Theme.Provider>;
};
