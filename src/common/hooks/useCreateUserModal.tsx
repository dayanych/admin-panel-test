import { SelectChangeEvent, useTheme } from '@mui/material';
import { useState } from 'react';

import { UsersRepository } from '../../server/users/users.repository';
import { StyledTextPlaceholder } from '../components/CreateUserModal/styled';
import { UserPermission } from '../constants/userPermission';
import { User } from '../entities/user';

type UserDataType = {
  email: string;
  permission: string[];
};

const usersRepository = new UsersRepository();

export const useCreateUserModal = (updateUsers: (users: User[]) => void) => {
  const theme = useTheme();
  const [userData, setUserData] = useState<UserDataType>({
    email: '',
    permission: [],
  });

  const checkItem = (value: string) => userData.permission.includes(value);

  const displayCheck = (selected: string[]) => {
    if (selected.length === 0) {
      return <StyledTextPlaceholder>Выберите права доступа</StyledTextPlaceholder>;
    }

    if (selected.includes('all')) {
      return 'Все права';
    }
    return selected.join(', ');
  };

  const handleCheckboxChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    if (value.includes('all')) {
      setUserData((prevState) => ({
        ...prevState,
        permission: [
          UserPermission.AdModeration,
          UserPermission.Blog,
          UserPermission.TechnicalSupport,
          UserPermission.CustomerCommunications,
          UserPermission.Analytics,
          UserPermission.Stocks,
          UserPermission.Admin,
          'all',
        ],
      }));
    } else {
      setUserData((prevState) => ({
        ...prevState,
        permission: typeof value === 'string' ? value.split(',') : value,
      }));
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setUserData((prevState) => ({
      ...prevState,
      email: value,
    }));
  };

  const createUser = () => {
    const permissions = userData.permission;

    if (permissions.includes('all')) {
      permissions.splice(permissions.indexOf('all'), 1);
    }

    const user = {
      email: userData.email,
      permissions: permissions as UserPermission[],
      name: 'Пользователь',
      image: '',
    };

    usersRepository.createUser(user);

    const newUsers = usersRepository.getUsers('');

    updateUsers(newUsers);
  };

  return {
    theme,
    userData,
    handleCheckboxChange,
    handleInputChange,
    createUser,
    checkItem,
    displayCheck,
  };
};
