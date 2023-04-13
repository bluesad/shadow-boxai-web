import { Event, EventSourcePolyfill, MessageEvent } from 'event-source-polyfill';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface Callback {
  onOpen: (event: Event) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMessage: (data: string, event: MessageEvent) => void;
  onError: (event: Event) => void;
}

export interface Option extends Partial<Callback> {
  headers?: Record<string, string>;
}

export interface SSE {
  ref: React.MutableRefObject<EventSourcePolyfill | null>;
  open: (url: string, options?: Option) => void;
  close: () => void;
}

export default function useSSE(): SSE {
  const sseRef = useRef<EventSourcePolyfill | null>(null);
  const [url, setUrl] = useState<string>();
  const optionRef = useRef<Option>();

  useEffect(() => {
    if (!url) return;

    const { current: option } = optionRef;
    const handleOpen = (event: Event) => {
      console.debug('!!! SSE OPEN', event);
      option?.onOpen?.(event);
    };
    const handleMessage = (event: MessageEvent) => {
      console.debug('!!! SSE MESSAGE !!!', event.data);
      option?.onMessage?.(event.data as string, event);
    };
    const handleError = (event: Event) => {
      console.debug('!!! SSE ERROR', event);
      option?.onError?.(event);
    };

    const sse = new EventSourcePolyfill(url, { headers: option?.headers });
    sse.addEventListener('open', handleOpen);
    sse.addEventListener('message', handleMessage);
    sse.addEventListener('error', handleError);
    sseRef.current = sse;

    return () => {
      console.debug('!!! SSE GOING TO CLOSE');
      sse.close();
      sse.removeEventListener('open', handleOpen);
      sse.removeEventListener('message', handleMessage);
      sse.removeEventListener('error', handleError);
      sseRef.current = null;
    };
  }, [url]);

  const handleSSEOpen = useCallback((openUrl: string, openOption?: Option) => {
    optionRef.current = openOption;
    setUrl(openUrl);
  }, []);
  const handleSSEClose = useCallback(() => {
    if (sseRef.current != null) sseRef.current.close();
    sseRef.current = null;
  }, []);

  return useMemo(
    () => ({
      ref: sseRef,
      open: handleSSEOpen,
      close: handleSSEClose,
    }),
    [handleSSEClose, handleSSEOpen],
  );
}
