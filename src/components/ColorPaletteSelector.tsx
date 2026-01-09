'use client';

import { useState } from 'react';
import { useTheme, PaletteKey } from './ThemeContext';

export default function ColorPaletteSelector() {
  const { currentPalette, setPalette, palettes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-float"
        aria-label="Change color palette"
      >
        <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>

      {/* Palette Selector Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-dark-lighter border border-gray-700 rounded-xl p-4 shadow-2xl min-w-[240px] animate-fade-in-up">
          <h3 className="text-text-light font-semibold mb-4 text-sm">Choose Color Palette</h3>
          <div className="space-y-2">
            {(Object.keys(palettes) as PaletteKey[]).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setPalette(key);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                  currentPalette === key
                    ? 'bg-secondary/20 border border-secondary'
                    : 'hover:bg-dark border border-transparent hover:border-gray-600'
                }`}
              >
                {/* Color Preview */}
                <div className="flex -space-x-1">
                  <div
                    className="w-5 h-5 rounded-full border-2 border-dark-lighter"
                    style={{ backgroundColor: palettes[key].primary }}
                  />
                  <div
                    className="w-5 h-5 rounded-full border-2 border-dark-lighter"
                    style={{ backgroundColor: palettes[key].secondary }}
                  />
                  <div
                    className="w-5 h-5 rounded-full border-2 border-dark-lighter"
                    style={{ backgroundColor: palettes[key].accent }}
                  />
                </div>
                <span className="text-text-light text-sm">{palettes[key].name}</span>
                {currentPalette === key && (
                  <svg className="w-4 h-4 text-secondary ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
