export const prop =
  <Key extends string | number | symbol>(key: Key) =>
  <O extends { [K in Key]: unknown }>(obj: O) =>
    obj[key];

export const getId = prop('id');
