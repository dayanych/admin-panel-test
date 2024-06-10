import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { LeftMenuNavigation } from './leftMenuNavigation';
import {
  StyledImageBox,
  StyledImg,
  StyledLeftMenuBox,
  StyledLink,
  StyledNav,
  StyledSection,
} from './styled';
import { useMediaMd } from '../../hooks/useMediaMd';

export const LeftMenu: FC = () => {
  const matches = useMediaMd();

  return (
    <StyledSection>
      <StyledLeftMenuBox>
        {matches && (
          <NavLink to="/">
            <StyledImageBox>
              <StyledImg src="/images/logo.svg" alt="Firm Logo" />
            </StyledImageBox>
          </NavLink>
        )}
        <StyledLink to="/">
          <StyledImageBox>
            <StyledImg src="/images/main-avatar.png" alt="Avatar" />
          </StyledImageBox>
          {!matches && (
            <Box>
              <Typography variant="h3">Артем Иванов</Typography>
              <Typography variant="body2">Собственник</Typography>
            </Box>
          )}
        </StyledLink>
        <StyledNav>
          <LeftMenuNavigation />
        </StyledNav>
      </StyledLeftMenuBox>
    </StyledSection>
  );
};
