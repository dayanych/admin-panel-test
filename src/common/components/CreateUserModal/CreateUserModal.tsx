import { Button, ListItemText, Select, Typography } from '@mui/material';
import { FC } from 'react';

import { IoIosArrowDown, IoMdClose } from 'react-icons/io';

import {
  StyledButton,
  StyledCloseButton,
  StyledForm,
  StyledInput,
  StyledSelectItem,
  StyledWrapper,
} from './styled';
import { UserPermission } from '../../constants/userPermission';
import { User } from '../../entities/user';
import { useCreateUserModal } from '../../hooks/useCreateUserModal';
import { CommonCheckbox } from '../CommonCheckbox';
import { Modal } from '../Modal';

interface CreateUserModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onUpdateUsers: (users: User[]) => void;
}

const SelectOptions = [
  {
    value: 'all',
    label: 'Все',
  },
  {
    value: UserPermission.AdModeration,
    label: 'Модерация объявлений',
  },
  {
    value: UserPermission.Admin,
    label: 'Администратор',
  },
  {
    value: UserPermission.Blog,
    label: 'Блог',
  },
  {
    value: UserPermission.TechnicalSupport,
    label: 'Тех. поддержка',
  },
  {
    value: UserPermission.CustomerCommunications,
    label: 'Обращение клиентов',
  },
  {
    value: UserPermission.Analytics,
    label: 'Аналитика',
  },
  {
    value: UserPermission.Stocks,
    label: 'Акции',
  },
];

export const CreateUserModal: FC<CreateUserModalProps> = ({
  isOpen,
  closeModal,
  onUpdateUsers,
}) => {
  const {
    theme,
    userData,
    handleCheckboxChange,
    handleInputChange,
    createUser,
    checkItem,
    displayCheck,
  } = useCreateUserModal(onUpdateUsers);

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <StyledWrapper>
        <StyledCloseButton onClick={closeModal} variant="contained" color="secondary">
          <IoMdClose size={26} />
        </StyledCloseButton>
        <Typography variant="h2">Отправьте приглашение</Typography>
        <StyledForm>
          <StyledInput placeholder="Email" onChange={handleInputChange} />
          <Select
            value={userData.permission}
            onChange={handleCheckboxChange}
            multiple
            displayEmpty
            input={<StyledInput />}
            renderValue={displayCheck}
            IconComponent={IoIosArrowDown}
            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: theme.palette.background.default,
                  boxShadow: theme.shadows[2],
                  borderRadius: theme.shape.borderRadius * 2,
                },
              },
            }}
            sx={{
              width: '100%',
              '& .MuiSelect-icon': {
                color: theme.palette.grey[300],
                right: theme.spacing(3),
              },
              '&.MuiSelect-select': {
                paddingRight: theme.spacing(5),
              },
            }}
          >
            {SelectOptions.map((option) => (
              <StyledSelectItem key={option.value} value={option.value}>
                <CommonCheckbox isChecked={checkItem(option.value)} />
                <ListItemText primary={option.label} />
              </StyledSelectItem>
            ))}
          </Select>
          <StyledButton variant="contained" onClick={createUser} fullWidth>
            Отправить
          </StyledButton>
        </StyledForm>
      </StyledWrapper>
    </Modal>
  );
};
