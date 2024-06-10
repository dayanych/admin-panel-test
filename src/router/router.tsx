import { Navigate, RouteObject } from 'react-router-dom';

import { MainLayout } from '../layouts/MainLayout';
import { TeamPage } from '../pages/TeamPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/team" />,
      },
      {
        path: '/team',
        element: <TeamPage />,
        handle: () => 'Команда',
      },
    ],
  },
];
