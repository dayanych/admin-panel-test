import { FC, ReactNode } from 'react';

import { StyledDialog } from './styled';
import { Wrapper } from '../Wrapper';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  return (
    <StyledDialog open={isOpen} onClose={closeModal}>
      <Wrapper>{children}</Wrapper>
    </StyledDialog>
  );
};
