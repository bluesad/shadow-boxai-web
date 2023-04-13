import { createStyler } from '@vfans/utils/lib/styler';

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

export default function Menu(props: Props) {
  const { className, menus = [] } = props;

  return (
    <ul className={styler(className, styler('app-menu'))}>
      {menus.map(({ path, label, exact }) => (
        <li key={path} className={styler('menu-item')}>
          <Link
            className={styler('menu-link')}
            activeClassName={styler('active-link')}
            href={path}
            exact={exact}
          >
            <span className={styler('link-label')}>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
