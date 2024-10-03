type Key = 'data_rocket';

function save<T>(key: Key, value: T) {
  if (typeof key !== 'string') throw new Error('Key must be a string.');

  let convertedValue;
  if (typeof value === 'object') convertedValue = JSON.stringify(value);
  else convertedValue = String(value);

  try {
    const encoded = window?.btoa(convertedValue);
    localStorage.setItem(key, encoded);
  } catch {
    throw new Error('Converted value is invalid.');
  }
}

function get(key: Key) {
  if (typeof key !== 'string') throw new Error('Key must be a string.');

  const storedValue = localStorage.getItem(key);
  if (storedValue === null) return null;

  try {
    const dencoded = window?.atob(storedValue);
    const parsedValue = JSON.parse(dencoded);
    return parsedValue;
  } catch (ex) {
    return ex;
  }
}

function remove(key: Key) {
  if (typeof key !== 'string') throw new Error('Key must be a string.');
  try {
    localStorage.removeItem(key);
  } catch {
    throw new Error('Can not remove this key');
  }
}

export const persistData = { save, get, remove };
