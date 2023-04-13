import { createStyler } from '@vfans/utils/lib/styler';
import { FormattedMessage, useIntl } from 'react-intl';

import * as MESSAGE from '../../messages';

import style from './style.module.css';

const styler = createStyler(style);

export default function Footer() {
  const { formatMessage } = useIntl();
  const contact = formatMessage({ id: MESSAGE.COMMON_CONTACT });

  return (
    <div className={styler('footer')}>
      <p className={styler('paragraph')}>
        <FormattedMessage id={MESSAGE.FOOTER_CONTACT} />
        <a className={styler('footer-mail')} href={`mailto:${contact}`}>
          {contact}
        </a>
      </p>
      <p className={styler('paragraph')}>
        <FormattedMessage id={MESSAGE.FOOTER_COPYRIGHT} />
      </p>
    </div>
  );
}
