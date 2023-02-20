export type ObjectKey = string | number | symbol
export type Bang<T, K = ObjectKey> = T & Record<K, undefined>;

export const prop =
  <Key extends ObjectKey>(key: Key) =>
  <O extends { [K in Key]: unknown }>(obj: O) =>
    obj[key];

export const getId = prop('id');

