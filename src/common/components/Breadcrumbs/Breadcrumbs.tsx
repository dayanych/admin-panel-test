import { Link, Typography, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import React, { useMemo } from 'react';
import { NavLink, useMatches } from 'react-router-dom';

export const Breadcrumbs = React.memo(() => {
  const matches = useMatches();

  const crumbs = useMemo(() => {
    return matches
      .map((item, idx) => {
        const path = item.pathname;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const crumb = item.handle ? item.handle({ params: item.params }) : null;

        if (path === '/' && idx === 0) return null;

        const isLast = idx === matches.length - 1;

        return isLast ? (
          <Typography key={crumb} variant="h2">
            {crumb}
          </Typography>
        ) : (
          <Link variant="h2" component={NavLink} to={item.pathname} key={crumb}>
            {crumb}
          </Link>
        );
      })
      .filter(Boolean);
  }, [matches]);

  return (
    <MUIBreadcrumbs separator={<Typography variant="h2">/</Typography>} aria-label="breadcrumb">
      {crumbs}
    </MUIBreadcrumbs>
  );
});
