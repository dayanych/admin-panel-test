import { Checkbox, useTheme } from '@mui/material';
import { FC } from 'react';
import { TbSquareRounded, TbSquareRoundedCheckFilled } from 'react-icons/tb';

interface CommonCheckboxProps {
  isChecked: boolean;
}

const ICON_SIZE = 23;

export const CommonCheckbox: FC<CommonCheckboxProps> = ({ isChecked }) => {
  const theme = useTheme();

  return (
    <Checkbox
      checked={isChecked}
      icon={<TbSquareRounded size={ICON_SIZE} color={theme.palette.grey[200]} />}
      checkedIcon={<TbSquareRoundedCheckFilled size={ICON_SIZE} />}
    />
  );
};
