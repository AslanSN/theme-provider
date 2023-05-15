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
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useMemo(() => {
    /**
     * ! Estilos en HMTL style="..."
     */
    // const rootElement = document.querySelector("html");
    // if (rootElement) {
    //   Object.entries(theme).forEach(([key, value]) => {
    //     rootElement.style.setProperty(key, value);
    //   });
    // }

    /**
     * ! Estilos en Style tag head
     */
    const themeStyles = Object.entries(theme)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    if (!styleRef.current) 
    {
      const styleElement = document.createElement("style");
      styleElement.innerHTML = `:root {\n${themeStyles}}`;
      styleRef.current = styleElement;
      document.head.appendChild(styleElement);
    } 
    else 
    {
      styleRef.current.innerHTML = `:root {\n${themeStyles}}`;
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
