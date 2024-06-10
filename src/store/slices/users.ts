/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { User } from '../../common/entities/user';

interface UsersState {
  users: User[];
}

const getUsersFromLocalStorage = (): User[] => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

const setUsersToLocalStorage = (users: User[]) => {
  localStorage.setItem('users', JSON.stringify(users));
};

const initialState: UsersState = {
  users: getUsersFromLocalStorage(),
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;

      setUsersToLocalStorage(action.payload);
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
