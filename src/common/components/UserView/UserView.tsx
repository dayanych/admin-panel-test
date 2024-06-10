import { Typography } from '@mui/material';
import { FC } from 'react';
import { BsThreeDots } from 'react-icons/bs';

import {
  StyledAvatar,
  StyledAvatarWrapper,
  StyledButton,
  StyledContentWrapper,
  StyledMainWrapper,
  StyledTag,
  StyledTagsWrapper,
  StyledTitleWrapper,
} from './styled';
import { UserPermission } from '../../constants/userPermission';
import { User } from '../../entities/user';

interface UserViewProps {
  user: User;
}

export const UserView: FC<UserViewProps> = ({ user }) => {
  return (
    <StyledMainWrapper>
      <StyledAvatarWrapper>
        <StyledAvatar src={user.image} />
      </StyledAvatarWrapper>
      <StyledContentWrapper>
        <StyledTitleWrapper>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="body1">{user.email}</Typography>
        </StyledTitleWrapper>
        <StyledTagsWrapper>
          {user.permissions.map((tag) =>
            tag === UserPermission.Admin ? (
              <StyledTag variant="body2" key={tag} data-admin>
                {tag}
              </StyledTag>
            ) : (
              <StyledTag variant="body2" key={tag}>
                {tag}
              </StyledTag>
            )
          )}
        </StyledTagsWrapper>
      </StyledContentWrapper>
      <StyledButton color="secondary">
        <BsThreeDots />
      </StyledButton>
    </StyledMainWrapper>
  );
};
