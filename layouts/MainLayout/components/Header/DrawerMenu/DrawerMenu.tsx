/* eslint-disable jsx-a11y/no-autofocus*/
import { useRef } from 'react';
import { createStyler } from '@vfans/utils/lib/styler';
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react';

import MenuIcon from '../assets/menu.svg';
import CloseIcon from '../assets/close.svg';

import style from './style.module.css';

import Link from '@/components/common/Link';

const styler = createStyler(style);

interface MenuItem {
  path: string;
  exact?: boolean;
  label: string | React.ReactElement;
}

interface Props {
  className?: string;
  menus?: MenuItem[];
}

export default function DrawerMenu(props: Props) {
  const { className, menus = [] } = props;
  const { isOpen, onToggle, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <div className={styler(className, styler('app-menu'))}>
      <div ref={btnRef} onClick={onToggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onToggle}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className={styler('drawer-content', 'overwrite')}>
          {menus.map(({ path, label, exact }) => (
            <DrawerBody key={path} className={styler('menu-item')}>
              <Link
                className={styler('menu-link')}
                activeClassName={styler('active-link')}
                href={path}
                exact={exact}
              >
                <span onClick={onClose} className={styler('link-label')}>
                  {label}
                </span>
              </Link>
            </DrawerBody>
          ))}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
