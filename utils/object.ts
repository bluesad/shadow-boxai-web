export type Key = string | number | symbol;
export type Value = unknown;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PlainObject<K extends Key = Key, V = any> = Record<K, V>;

export function isPlainObject<K extends Key = Key, V = Value>(
  target: unknown,
): target is PlainObject<K, V> {
  if (typeof target !== 'object' || target === null) return false;

  let proto = target;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto) as object;
  }

  return Object.getPrototypeOf(target) === proto;
}

export function keys<T extends PlainObject>(target: T): (keyof T)[] {
  return Object.keys(target);
}

// export function pick<T extends PlainObject, K extends keyof T>(target: T, targetKeys: K[]) {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//   return targetKeys.reduce((result, key) => Object.assign(result, target[key]), {} as Pick<T, K>);
// }
export function pick<T extends PlainObject, K extends keyof T>(obj: T, pickKeys: K[]) {
  const result = {} as Pick<T, K>;

  pickKeys.forEach((key) => {
    result[key] = obj[key];
  });

  return result;
}

export function omit<T extends PlainObject, K extends keyof T>(obj: T, omitKeys: K[]) {
  const result = { ...obj };

  omitKeys.forEach((key) => {
    delete result[key];
  });

  return result as Omit<T, K>;
}

export function flatten(
  nestedObject: PlainObject<string, unknown>,
  prefix = '',
  omitKey = '__default',
): { [key: string]: string | number } {
  if (nestedObject == null) return {};

  return Object.keys(nestedObject).reduce((messages, key) => {
    const value = nestedObject[key];
    // eslint-disable-next-line no-nested-ternary
    const prefixedKey = !prefix ? key : key === omitKey ? prefix : `${prefix}.${key}`;

    if (typeof value === 'object') {
      Object.assign(messages, flatten(value as PlainObject<string, unknown>, prefixedKey));
    } else {
      Object.assign(messages, { [prefixedKey]: value });
    }

    return messages;
  }, {});
}

export function hasKey<K extends Key>(object: PlainObject<Key, unknown>, key: K): boolean {
  return key in object;
}

export function pickDiffValues(object: PlainObject, oldObject: PlainObject): PlainObject {
  return Object.keys(object)
    .filter((key) => object[key] !== oldObject[key])
    .reduce(
      (previousValue, currentValue) =>
        Object.assign(previousValue, {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          [currentValue]: object[currentValue],
        }),
      {},
    );
}

export function pickSameValues(object: PlainObject, oldObject: PlainObject): PlainObject {
  return Object.keys(object)
    .filter((key) => object[key] === oldObject[key])
    .reduce(
      (previousValue, currentValue) =>
        Object.assign(previousValue, {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          [currentValue]: object[currentValue],
        }),
      {},
    );
}
