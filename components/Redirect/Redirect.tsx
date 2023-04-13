import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { presetQuery, toUrlObject } from '@/utils/url';

interface Props {
  to: string;
  replace?: boolean;
}

export default function Redirect(props: Props) {
  const { to, replace = false } = props;

  const router = useRouter();
  useEffect(() => {
    void (replace ? router.replace : router.push)(presetQuery(toUrlObject(to), router.query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
