import { Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import { StyledNavLink } from './styled';

type NavProps = {
  anchorText: string;
  href: string;
  icon: React.ReactNode;
};

export const LeftMenuNavigationItem = ({ ...props }: NavProps) => {
  const { anchorText, href, icon } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div className="relative">
      <StyledNavLink to={href}>
        {icon}
        {!matches && (
          <Typography variant="body2" fontWeight={theme.typography.fontWeightMedium}>
            {anchorText}
          </Typography>
        )}
      </StyledNavLink>
    </div>
  );
};
