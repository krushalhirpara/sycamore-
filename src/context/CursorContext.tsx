'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type CursorState = 'default' | 'hover' | 'click' | 'text';

interface CursorContextProps {
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextProps>({
  cursorState: 'default',
  setCursorState: () => {},
  cursorText: '',
  setCursorText: () => {},
});

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [cursorText, setCursorText] = useState<string>('');

  return (
    <CursorContext.Provider
      value={{ cursorState, setCursorState, cursorText, setCursorText }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
