'use client';
import { useEffect, useState } from 'react';

function useLocalStorage(key: string, initialValue: any): any {

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = { color: 'light' };
      return item;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const valueToStore =
        typeof storedValue === 'function'
          ? storedValue(storedValue)
          : storedValue;
      console.log(valueToStore, "valueToStore")
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
