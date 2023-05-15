import React, {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
  CSSProperties,
  useMemo,
  useRef,
} from "react";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeTokens = {
  "--primary-color": "#0084c9",
  "--widget-birthdays": "#7a03f1",
  "background-color": "var(--widget-birthdays)",
  width: "100svw",
  height: "100svh",
};

type ThemeSchema = CSSProperties & typeof ThemeTokens;

const Theme = createContext<ThemeSchema>(ThemeTokens);

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
}: PropsWithChildren<ThemeProviderProps>): any => {
  const theme = useContext(Theme);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useMemo(() => {
    const themeStyles = Object.entries(theme)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n");

    if (!styleRef.current) 
    {
      const styleElement = document.createElement("style");
      styleElement.innerHTML = `:root {\n${themeStyles}\n}`;
      styleRef.current = styleElement;
      document.head.appendChild(styleElement);
    } 
    else 
    {
      styleRef.current.innerHTML = `:root {\n${themeStyles}\n}`;
    }

    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, [theme]);

  return <Theme.Provider value={theme}>{children}</Theme.Provider>;
};
