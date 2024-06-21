const getItem = (key: any) => {
  const data: any =
    typeof window !== "undefined" ? localStorage.getItem(key) : "";

  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

const setItem = (key: any, value: any) => {
  const stringify = typeof value !== "string" ? JSON.stringify(value) : value;

  if (typeof window === "undefined") return;

  return localStorage ? localStorage.setItem(key, stringify) : "";
};

const removeItem = (key: any) => {
  // if (typeof window === "undefined") return;
  localStorage.removeItem(key);
};

export { getItem, setItem, removeItem };
