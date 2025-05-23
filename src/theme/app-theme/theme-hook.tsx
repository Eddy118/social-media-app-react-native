import {createContext, useContext} from "react";
import {ThemeType} from "./index.tsx";

export interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};
