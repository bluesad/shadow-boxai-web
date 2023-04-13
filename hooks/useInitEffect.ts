import { useEffect, useRef } from 'react';

import useLatestCallback from './useLatestCallback';

// https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
// from react v18, the init effect will always be mount twice
export default function useInitEffect(callback: () => void) {
  const initedRef = useRef(false);
  const handleCallback = useLatestCallback(callback);

  useEffect(() => {
    if (initedRef.current) return;

    initedRef.current = true;
    handleCallback();
  }, [handleCallback]);
}
