import { createStyler } from '@vfans/utils/lib/styler';
import Head from 'next/head';
import { memo } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import style from './style.module.css';

const styler = createStyler(style);

interface Props {
  children?: React.ReactNode;
  background?: false | 'normal' | 'large-left' | 'large-right';
  header?: boolean;
  footer?: boolean;
  fixed?: boolean;
}

export default memo(function MainLayuout(props: Props) {
  const { children, background = 'normal', header = true, footer = true, fixed = false } = props;

  const layoutStyle = styler(
    'main-layout',
    background === false && 'no-background-layout',
    background === 'large-left' && 'large-left-background-layout',
    background === 'large-right' && 'large-right-background-layout',
    header === false && 'no-header-layout',
    footer === false && 'no-footer-layout',
  );

  return (
    <div className={styler('layout-container', fixed && 'fixed-container')}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={layoutStyle}>
        {header && (
          <div className={styler('layout-header')}>
            <Header />
          </div>
        )}
        <div className={styler('layout-content')}>{children}</div>
        {footer && (
          <div className={styler('layout-footer')}>
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
});
