const STORAGE_DATA = 'user';

export const getDataFromLocalStorage = () => {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_DATA));
    return data ?? {};
    } catch (error) {
    return {};
  }
};

export const setDataToLocalStorage = data => {
  localStorage.setItem(STORAGE_DATA, JSON.stringify(data));
};