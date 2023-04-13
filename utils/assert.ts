/* eslint-disable @typescript-eslint/no-explicit-any */

export function isHTMLString(value?: string): boolean {
  return value != null && /<\/?[a-z][\s\S]*>/i.test(value);
}

const { toString } = Object.prototype;

export function isNull(source: unknown): source is null {
  return toString.call(source) === '[object Null]';
}

export function isUndefined(source: unknown): source is undefined {
  return toString.call(source) === '[object Undefined]';
}

export function isNone(source: unknown): source is null | undefined {
  return isUndefined(source) || isNull(source);
}

export function isString(source: unknown): source is string {
  return toString.call(source) === '[object String]';
}

export function isDate(source: unknown): source is Date {
  return toString.call(source) === '[object Date]';
}

export function isNumber(source: unknown): source is number {
  return toString.call(source) === '[object Number]';
}

export function isNaN(source: unknown): source is typeof NaN {
  return isNumber(source) && Number.isNaN(source);
}

export function isArray(source: unknown): source is any[] {
  return Array.isArray(source);
}

export function isObject(source: unknown): source is { [key: string]: any } {
  return toString.call(source) === '[object Object]';
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(source: unknown): source is Function {
  return source instanceof Function;
}

export function isPromise(source: unknown): source is Promise<any> {
  return isObject(source) && 'then' in source && isFunction(source.then);
}

export function isEmpty(source: unknown): boolean {
  if (isArray(source)) return source.length === 0;
  if (isObject(source)) return Object.keys(source).length === 0;
  if (isString(source)) return source === '';
  return source == null;
}

export function isDeepEqual(source: unknown, target: unknown): boolean {
  if (source === target) return true;

  if (!isObject(source) && !isObject(target)) return source === target;

  if (isObject(source) && isObject(target)) {
    const sourceKeys = Object.keys(source);
    const targetKeys = Object.keys(target);

    return (
      sourceKeys.length === targetKeys.length &&
      sourceKeys.every((key) => isDeepEqual(source[key], target[key]))
    );
  }

  return false;
}

export function isJSONString(source: unknown): source is string {
  if (!isString(source)) return false;

  try {
    JSON.parse(source);
  } catch (e) {
    return false;
  }

  return true;
}

export function isPresent(value: unknown): boolean {
  return !isNone(value) && !isEmpty(value) && !isNaN(value);
}

export function hasOwnProperty<X extends object, Y extends PropertyKey>(
  obj: X,
  prop: Y,
): obj is X & Record<Y, unknown> {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
