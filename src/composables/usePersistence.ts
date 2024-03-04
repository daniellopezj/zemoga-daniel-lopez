import type { Celebrity } from "~/types/general.types";
import data from '@/assets/data/data.json';

export const persistenceData = (celebrities: Celebrity[]) => {
  localStorage.setItem('celebrities', JSON.stringify(celebrities));
}

export const getDataFromStorage = (): Celebrity[] => {
  const info = localStorage.getItem('celebrities');
  if (info) {
    return JSON.parse(info);
  }
  return data.data as Celebrity[];
}