import { useState, useEffect } from 'react';

import { useMediaMd } from './useMediaMd';
import { UsersRepository } from '../../server/users/users.repository';
import { User } from '../entities/user';

const usersRepository = new UsersRepository();

export const useTeamPage = () => {
  const matches = useMediaMd();
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadUsers = () => {
    const fetchedUsers = usersRepository.getUsers(searchValue);
    setUsers(fetchedUsers);
  };

  useEffect(() => {
    loadUsers();
  }, [users, searchValue]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const updateUsers = (updatedUsers: User[]) => {
    setUsers(updatedUsers);
  };

  return {
    users,
    matches,
    isModalOpen,
    setSearchValue,
    openModal,
    closeModal,
    updateUsers,
  };
};
