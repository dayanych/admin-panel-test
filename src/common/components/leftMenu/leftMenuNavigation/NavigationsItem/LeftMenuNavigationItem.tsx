import { Typography, useTheme } from '@mui/material';
import React from 'react';

import { StyledNavLink } from './styled';
import { useMediaMd } from '../../../../hooks/useMediaMd';

type NavProps = {
  anchorText: string;
  href: string;
  icon: React.ReactNode;
};

export const LeftMenuNavigationItem = ({ ...props }: NavProps) => {
  const { anchorText, href, icon } = props;
  const theme = useTheme();
  const matches = useMediaMd();

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
