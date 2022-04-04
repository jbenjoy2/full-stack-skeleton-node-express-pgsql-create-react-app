import { useState, useEffect } from "react";

const useLocalStorageState = (keyName, defaultValue) => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(keyName);

      return item ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.error(err);
      return defaultValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(keyName, JSON.stringify(state));
  }, [keyName, state, defaultValue]);
  return [state, setState];
};

export default useLocalStorageState;
