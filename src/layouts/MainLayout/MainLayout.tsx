import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { StyledSection, StyledLeftBox, StyledDrawer, StyledRightBox, StyledMain } from './styled';
import { Header } from '../../common/components/Header';
import { LeftMenu } from '../../common/components/LeftMenu';
import { useMediaMd } from '../../common/hooks/useMediaMd';
import { MainPage } from '../../pages/MainPage';

export const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const matches = useMediaMd();

  const toggleDrawer = (shouldOpen: boolean) => () => {
    setIsDrawerOpen(shouldOpen);
  };

  return (
    <StyledSection>
      <StyledLeftBox>
        <StyledDrawer
          variant={matches ? 'permanent' : 'temporary'}
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          <LeftMenu />
        </StyledDrawer>
      </StyledLeftBox>
      <StyledRightBox>
        <Header openDrawer={toggleDrawer(true)} />
        <StyledMain>
          <MainPage>
            <Outlet />
          </MainPage>
        </StyledMain>
      </StyledRightBox>
    </StyledSection>
  );
};
