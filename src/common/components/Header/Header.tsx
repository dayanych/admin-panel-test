import { Breadcrumbs } from '@mui/material';

import { StyledHeader, StyledMenuBtn } from './styled';

export const Header = ({ openDrawer }: { openDrawer: () => void }) => {
  return (
    <StyledHeader>
      <StyledMenuBtn onClick={openDrawer} />
      <Breadcrumbs />
    </StyledHeader>
  );
};
