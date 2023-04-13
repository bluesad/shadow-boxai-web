/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Service {
  type Request<R = void, P = undefined> = P extends undefined
    ? () => Promise<R>
    : (params: P) => Promise<R>;

  type Response<T extends Request<any, any>> = T extends Request<infer R, any> ? R : never;

  type Params<T extends Request<any, any>> = T extends Request<any, infer P> ? P : never;
}
