'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define color palettes
export const colorPalettes = {
  default: {
    name: 'Default Blue',
    primary: '#1e3a5f',
    primaryDark: '#0f2744',
    primaryLight: '#2c5282',
    secondary: '#c9a227',
    accent: '#4299e1',
  },
  ocean: {
    name: 'Ocean Teal',
    primary: '#0d4f4f',
    primaryDark: '#083838',
    primaryLight: '#1a6b6b',
    secondary: '#00d4aa',
    accent: '#38bdf8',
  },
  sunset: {
    name: 'Sunset Orange',
    primary: '#4a1d1d',
    primaryDark: '#2d1010',
    primaryLight: '#6b2d2d',
    secondary: '#ff7b54',
    accent: '#ffd93d',
  },
  forest: {
    name: 'Forest Green',
    primary: '#1a3a1a',
    primaryDark: '#0f220f',
    primaryLight: '#2d5a2d',
    secondary: '#4ade80',
    accent: '#86efac',
  },
  purple: {
    name: 'Royal Purple',
    primary: '#2d1b4e',
    primaryDark: '#1a0f2e',
    primaryLight: '#4c2882',
    secondary: '#a855f7',
    accent: '#c084fc',
  },
};

export type PaletteKey = keyof typeof colorPalettes;

interface ThemeContextType {
  currentPalette: PaletteKey;
  setPalette: (palette: PaletteKey) => void;
  palettes: typeof colorPalettes;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentPalette, setCurrentPalette] = useState<PaletteKey>('default');

  useEffect(() => {
    // Load saved palette from localStorage (check for window to support SSR)
    if (typeof window !== 'undefined') {
      const savedPalette = localStorage.getItem('colorPalette') as PaletteKey;
      if (savedPalette && colorPalettes[savedPalette]) {
        setCurrentPalette(savedPalette);
      }
    }
  }, []);

  useEffect(() => {
    // Apply palette to CSS custom properties
    const palette = colorPalettes[currentPalette];
    const root = document.documentElement;
    
    root.style.setProperty('--color-primary', palette.primary);
    root.style.setProperty('--color-primary-dark', palette.primaryDark);
    root.style.setProperty('--color-primary-light', palette.primaryLight);
    root.style.setProperty('--color-secondary', palette.secondary);
    root.style.setProperty('--color-accent', palette.accent);
    
    // Save to localStorage (check for window to support SSR)
    if (typeof window !== 'undefined') {
      localStorage.setItem('colorPalette', currentPalette);
    }
  }, [currentPalette]);

  const setPalette = (palette: PaletteKey) => {
    if (colorPalettes[palette]) {
      setCurrentPalette(palette);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentPalette, setPalette, palettes: colorPalettes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
