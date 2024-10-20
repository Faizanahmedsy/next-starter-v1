type SessionValue = string | number | boolean | object | null;

const getSessionItem = <T = SessionValue>(key: string): T | null => {
  if (typeof window === "undefined") return null;

  const data = sessionStorage.getItem(key);
  if (!data) return null;

  try {
    return JSON.parse(data) as T;
  } catch (err) {
    return data as unknown as T;
  }
};

const setSessionItem = (key: string, value: SessionValue): void => {
  if (typeof window === "undefined") return;

  const stringify = typeof value !== "string" ? JSON.stringify(value) : value;
  sessionStorage.setItem(key, stringify);
};

const removeSessionItem = (key: string): void => {
  if (typeof window === "undefined") return;

  sessionStorage.removeItem(key);
};

export { getSessionItem, setSessionItem, removeSessionItem };
