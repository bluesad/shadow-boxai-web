import { useCallback, useState } from 'react';

type Signal = unknown;

export default function useSignal() {
  const [signal, setSignal] = useState<Signal>();

  const handleSignal = useCallback(() => {
    setSignal(Math.random());
  }, []);

  return [signal, handleSignal] as const;
}

export interface RefreshAble<T = unknown> {
  refreshSignal: T;
}
