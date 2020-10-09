import React from 'react';

export const ThemeContext = React.createContext({
    theme: 'light',
    toggleTheme: () => {}
})

export const themes = {
    light: {
        classes: 'light'
    },
    dark: {
        classes: 'dark'
    }
}