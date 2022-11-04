import identity from 'lodash/identity';

export const toKeyValue = <
  Item extends object,
  Key extends number | string | symbol,
  Value = Item
>(
  list: Item[],
  toKey: (item: Item) => Key,
  toValue: (item: Item) => Value = identity
) => {
  return list.reduce<Partial<Record<Key, Value>>>(
    (acc, curr) => ({
      ...acc,
      [toKey(curr)]: toValue(curr),
    }),
    {}
  );
};
