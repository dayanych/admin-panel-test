import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { StyledSection, StyledLeftBox, StyledDrawer, StyledRightBox, StyledMain } from './styled';
import { Header } from '../../common/components/Header';
import { LeftMenu } from '../../common/components/leftMenu';
import { MainPage } from '../../pages/MainPage';

export const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

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
