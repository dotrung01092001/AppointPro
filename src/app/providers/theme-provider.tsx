import { createContext, useLayoutEffect, useState, type PropsWithChildren } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null)

export function ThemeProvider({ children }: PropsWithChildren) {
    const [theme, setTheme] = useState<Theme>(() => {

        const stored = localStorage.getItem('theme');
        const initialTheme = stored === 'dark' ? 'dark' : 'light';
        document.documentElement.classList.toggle("dark", initialTheme === 'dark')
        return initialTheme;
    });

    useLayoutEffect(() => {
        document.documentElement.classList.toggle("dark", theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}