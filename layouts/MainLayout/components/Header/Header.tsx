import { Button, Flex } from '@chakra-ui/react';
import { createStyler } from '@vfans/utils/lib/styler';
import { FormattedMessage } from 'react-intl';

import * as MESSAGE from '../../messages';

import Logo from './assets/logo.svg';
import Menu from './Menu';
import style from './style.module.css';
import DrawerMenu from './DrawerMenu';

import Link from '@/components/common/Link';
import LocaleMenu from '@/components/common/LocaleMenu';
import UserAvatar from '@/components/common/UserAvatar';
import { PATH } from '@/const';
import { useAuth } from '@/contexts/AuthProvider';

const styler = createStyler(style);

const menus = [
  {
    path: PATH.HOME,
    exact: true,
    label: <FormattedMessage id={MESSAGE.HEADER_NAV_HOME} />,
  },
  {
    path: PATH.ABOUT_VFANS_DAO,
    label: <FormattedMessage id={MESSAGE.HEADER_NAV_VFANS_DAO} />,
  },
  {
    path: PATH.ABOUT_VFANS_TOKEN,
    label: <FormattedMessage id={MESSAGE.HEADER_NAV_VFT} />,
  },
  {
    path: PATH.BECOME_CONTRIBUTOR,
    label: <FormattedMessage id={MESSAGE.HEADER_NAV_CONTRIBUTOR} />,
  },
];

export default function Header() {
  const { loggedIn } = useAuth();

  return (
    <div className={styler('app-header')}>
      <DrawerMenu menus={menus} className={styler('drawer-menu')} />
      <Link href="/">
        <Logo className={styler('header-logo')} />
      </Link>
      <Menu menus={menus} className={styler('menu')} />
      <Flex flexFlow="row nowrap" alignItems="center">
        <LocaleMenu className={styler('locale-button')} />
        {loggedIn ? (
          <Link className={styler('header-vfans')} href={PATH.MY_VFANS}>
            <UserAvatar className={styler('header-avatar')} border />
          </Link>
        ) : (
          <Link className={styler('header-login')} href={PATH.SIGN_IN}>
            <FormattedMessage id={MESSAGE.HEADER_BUTTON_LOGIN} />
          </Link>
        )}
        {loggedIn && (
          <Button
            className={styler('become-creator')}
            as={Link}
            href={PATH.CREATOR_APPLY}
            colorScheme="primary"
            ml="32px"
            px="38px"
          >
            <FormattedMessage id={MESSAGE.HEADER_BUTTON_BECOME_CREATOR} />
          </Button>
        )}
      </Flex>
    </div>
  );
}
