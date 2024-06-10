import { Box, InputAdornment, TextField } from '@mui/material';
import { IoIosSearch } from 'react-icons/io';

import { StyledButton, StyledFunctionalWrapper, StyledTitleWrapper } from './styled';
import { Breadcrumbs } from '../../common/components/Breadcrumbs';
import { CreateUserModal } from '../../common/components/CreateUserModal';
import { UserView } from '../../common/components/UserView';
import { Wrapper } from '../../common/components/Wrapper';
import { useTeamPage } from '../../common/hooks/useTeamPage';

const ICON_SIZE = 22;

export const TeamPage = () => {
  const { users, matches, isModalOpen, setSearchValue, openModal, closeModal, updateUsers } =
    useTeamPage();

  return (
    <Wrapper>
      <StyledTitleWrapper>
        {matches && <Breadcrumbs />}
        <StyledFunctionalWrapper>
          <TextField
            placeholder="Поиск по Email"
            aria-label="search"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IoIosSearch size={ICON_SIZE} />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <StyledButton onClick={openModal} variant="contained" fullWidth>
            Добавить пользователя
          </StyledButton>
        </StyledFunctionalWrapper>
      </StyledTitleWrapper>
      <Box>
        {users.map((user) => (
          <UserView key={user.email} user={user} />
        ))}
      </Box>
      <CreateUserModal isOpen={isModalOpen} closeModal={closeModal} onUpdateUsers={updateUsers} />
    </Wrapper>
  );
};
