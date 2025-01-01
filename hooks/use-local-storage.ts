export function useLocalStorage() {
  function getItem(key: string) {
    if (!localStorage) return null;
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  function setItem(key: string, value: string) {
    if (!localStorage) return null;
    localStorage.setItem(key, value);
  }

  function removeItem(key: string) {
    if (!localStorage) return null;
    localStorage.getItem(key);
  }

  return {
    getItemFromLocalStorage: getItem,
    saveItemToLocalStorage: setItem,
    removeItemFromLocalStorage: removeItem,
  };
}
