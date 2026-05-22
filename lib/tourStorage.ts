import { Tour } from '../types';

const TOURS_STORAGE_KEY = 'travelCompanion_tours';

export const getStoredTours = (): Tour[] => {
  try {
    const raw = localStorage.getItem(TOURS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const saveStoredTours = (tours: Tour[]): void => {
  localStorage.setItem(TOURS_STORAGE_KEY, JSON.stringify(tours));
};

export const createTourId = (): string => {
  return crypto.randomUUID();
};
