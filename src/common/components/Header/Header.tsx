import { StyledHeader, StyledMenuBtn } from './styled';
import { useMediaMd } from '../../hooks/useMediaMd';
import { Breadcrumbs } from '../Breadcrumbs';

export const Header = ({ openDrawer }: { openDrawer: () => void }) => {
  const matches = useMediaMd();

  return (
    <StyledHeader>
      <StyledMenuBtn onClick={openDrawer} />
      {!matches && <Breadcrumbs />}
    </StyledHeader>
  );
};
