export {};

export const getStorage = <T>(key: string): T | null => {
  const valor = localStorage.getItem(key);
  if (valor) {
    return JSON.parse(valor);
  }
  return null;
};

export const setStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};
