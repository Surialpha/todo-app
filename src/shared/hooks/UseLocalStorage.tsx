import { useEffect, useState } from "react";

function useLocalStorage(LOCAL_STORAGE_NAME: string, defaultValue?: any): any {
  const [itemValue, setItemValue] = useState(defaultValue ? defaultValue : []);

  useEffect(() => {
    let parsedItem: any = [];

    const localStorageItem = localStorage.getItem(LOCAL_STORAGE_NAME);

    if (!localStorageItem) {
      localStorage.setItem(
        LOCAL_STORAGE_NAME,
        JSON.stringify(defaultValue ? defaultValue : [])
      );
      parsedItem = [];
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }

    setItemValue(parsedItem);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const updateLocalStorage = (newItem: string) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(LOCAL_STORAGE_NAME, stringifiedItem);
    setItemValue(newItem);
  };

  return [itemValue, updateLocalStorage];
}

export { useLocalStorage };
