import { createContext, useState } from 'react';

export const DarkModeContext = createContext(); // 필요한 데이터를 간직한다.

export function DarkModeProvider({ children }) {
  // 우산을 만든다. 자식 컴포넌트를 받아오는 컴포넌트
  const [darkMode, setDarkMode] = useState(false); // 글로벌하게 기억하고 처리해줄 것을 만들어 준다.
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    // 자식 컴포넌트와 공유하고 싶은 데이터는 value로 전달한다.
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider> // 자식 컴포넌트를 프로바이더로 감싸준다.
  );
}
