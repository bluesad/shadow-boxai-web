/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import ExtendableError from 'es6-error';

export interface Callbacks<T = any, R = any> {
  onInternal?: (error: Error) => void;
  onResponse?: (response: AxiosResponse<T>, error: AxiosError<T>) => R;
  onNetwork?: (request: XMLHttpRequest, error: AxiosError<T>) => void;
  onRequest?: (error: AxiosError<T>) => void;
  onFinal?: (error: ClientError<T, R>) => void;
}

export class ClientError<T = any, R = any> extends ExtendableError {
  private allowDefault = true;

  readonly origin: unknown;
  readonly response: R | undefined;
  readonly status: number | undefined;
  readonly message: string = '';

  constructor(error: unknown, callbacks: Callbacks<T, R> = {}) {
    super();
    this.origin = error;

    const { onInternal, onResponse, onNetwork, onRequest, onFinal } = callbacks;

    if (isAxiosError<T>(error)) {
      if (error.response != null) {
        this.response = onResponse?.(error.response, error);
      } else if (error.request != null) {
        onNetwork?.(error.request as XMLHttpRequest, error);
      } else {
        onRequest?.(error);
      }
    } else if (error instanceof Error) {
      onInternal?.(error);
    } else {
      onInternal?.(new Error(String(error)));
    }

    // Swtich next loop to let page handler error first
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    setTimeout(() => {
      // The arrow function bind current `this` into setTimeout callback
      if (this.allowDefault) onFinal?.(this);
    });
  }

  preventDefault() {
    this.allowDefault = false;
  }
}

export function isClientError(error: unknown): error is ClientError {
  return error instanceof ClientError;
}
