import { AiOutlinePieChart } from 'react-icons/ai';
import { BsChatSquareText } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaPeopleGroup } from 'react-icons/fa6';
import { HiOutlineCurrencyDollar, HiOutlineTemplate } from 'react-icons/hi';
import { IoNewspaperOutline } from 'react-icons/io5';
import { MdOutlinePhotoLibrary } from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';

import { LeftMenuNavigationItem } from './NavigationsItem';
import { StyledBox, StyledList } from '../styled';

const NAV_ICONS_SIZE = 25;
const links = [
  { anchorText: 'Аналитика', href: '/', icon: <AiOutlinePieChart size={NAV_ICONS_SIZE} /> },
  { anchorText: 'Профиль', href: '/', icon: <CgProfile size={NAV_ICONS_SIZE} /> },
  { anchorText: 'Модерация', href: '/', icon: <HiOutlineTemplate size={NAV_ICONS_SIZE} /> },
  { anchorText: 'Чаты', href: '/', icon: <BsChatSquareText size={NAV_ICONS_SIZE} /> },
  { anchorText: 'Баннеры', href: '/', icon: <MdOutlinePhotoLibrary size={NAV_ICONS_SIZE} /> },
  { anchorText: 'Команда', href: '/', icon: <FaPeopleGroup size={NAV_ICONS_SIZE} /> },
  { anchorText: 'Блог', href: '/', icon: <IoNewspaperOutline size={NAV_ICONS_SIZE} /> },
  { anchorText: 'Курс валют', href: '/', icon: <HiOutlineCurrencyDollar size={NAV_ICONS_SIZE} /> },
  { anchorText: 'Выйти', href: '/', icon: <TbLogout size={NAV_ICONS_SIZE} /> },
];

export const LeftMenuNavigation = () => {
  return (
    <StyledBox>
      <StyledList>
        {links.map((link) => (
          <LeftMenuNavigationItem
            key={link.anchorText}
            icon={link.icon}
            anchorText={link.anchorText}
            href={link.href}
          />
        ))}
      </StyledList>
    </StyledBox>
  );
};
