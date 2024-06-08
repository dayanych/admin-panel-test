import { FC, ReactNode } from 'react';

interface MainPageProps {
  children: ReactNode;
}

export const MainPage: FC<MainPageProps> = ({ children }) => {
  return children;
};
