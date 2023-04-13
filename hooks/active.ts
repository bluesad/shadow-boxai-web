import { useCallback, useState } from 'react';

export function useActive(initialState = false) {
  const [active, setActive] = useState(initialState);

  const on = useCallback(() => {
    setActive(true);
  }, []);
  const off = useCallback(() => {
    setActive(false);
  }, []);
  const toggle = useCallback(() => {
    setActive((prevState) => !prevState);
  }, []);

  return [
    active,
    {
      /**
       * @deprecated Using `on` instead
       */
      active: on,
      on,
      /**
       * @deprecated Using `off` instead
       */
      deactive: off,
      off,
      toggle,
    },
  ] as const;
}

export function useActiveState<T>(initialState?: T) {
  const [activeState, setActiveState] = useState<T | undefined>(initialState);

  const on = useCallback((state: T) => {
    setActiveState(state);
  }, []);
  const off = useCallback(() => {
    setActiveState(undefined);
  }, []);

  return [
    activeState,
    {
      /**
       * @deprecated Using `on` instead
       */
      active: on,
      on,
      /**
       * @deprecated Using `off` instead
       */
      deactive: off,
      off,
    },
  ] as const;
}
