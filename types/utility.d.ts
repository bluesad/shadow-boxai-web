/* eslint-disable @typescript-eslint/no-explicit-any */

declare type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

declare type Executable<A extends any[], R> = (...args: A) => R;

declare type Nullable<T> = T | null | undefined;

declare type ValueOf<T> = T[keyof T];

declare type ItemOf<T extends any[] | readonly any[]> = T[number];

declare type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;

declare type RequiredPick<T, K extends keyof T> = Required<Pick<T, K>>;
