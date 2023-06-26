"use client";

import * as React from "react";
import { type VariantProps, type CxReturn } from "class-variance-authority";
import { type ClassProp } from "class-variance-authority/dist/types";

import { buttonVariants } from "../button";

type ThemeContextType = {
  variants?: {
    button: (
      props: VariantProps<typeof buttonVariants> & ClassProp
    ) => CxReturn;
  };
  card?: string;
  cardHeader?: string;
};

export const ThemeContext = React.createContext({} as ThemeContextType);

type ThemeProviderProps = {
  theme: ThemeContextType;
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const context = React.useMemo(() => {
    return {
      ...theme,
    };
  }, [theme]);

  // const context = {
  //   ...theme,
  // };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);
  return themeContext;
};
