import { GlobalToken } from 'antd';

import { isFunction } from './assert';

type Style = React.CSSProperties;
type GetToken = (token: GlobalToken) => React.CSSProperties;

export function style(css: Style): Style;
export function style(getToken: GetToken): (token: GlobalToken) => Style;
export function style(arg: Style | GetToken) {
  return isFunction(arg) ? (token: GlobalToken) => arg(token) : arg;
}
