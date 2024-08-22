import { Menu as _Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

type MenuProps = {
  button: React.ReactNode;
  items: React.ReactNode[];
};

const Menu = ({ button, items }: MenuProps) => {
  return (
    <_Menu>
      <MenuButton>{button}</MenuButton>
      <MenuItems anchor="bottom">
        {items.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuItems>
    </_Menu>
  );
};

export default Menu;
