export function parseJSONFromLocalStorage(key, defaultValue) {
  return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
}

export function stringifyJSONToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
