export function useLocalStorage() {
  function getItem(key: string) {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  function setItem(key: string, value: string) {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    window.localStorage.setItem(key, value);
  }

  function removeItem(key: string) {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    window.localStorage.removeItem(key);
  }

  return {
    getItemFromLocalStorage: getItem,
    saveItemToLocalStorage: setItem,
    removeItemFromLocalStorage: removeItem,
  };
}