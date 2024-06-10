import { FC, ReactNode } from 'react';

import { StyledBox } from './styled';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};
