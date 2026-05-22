import { Tour } from '../types';
import { INTERNATIONAL_TOURS, DOMESTIC_TOURS, UMRAH_TOURS } from '../constants';
import { createTourId, getStoredTours, saveStoredTours } from './tourStorage';

export type ToursByCategory = {
  international: Tour[];
  domestic: Tour[];
  umrah: Tour[];
};

const defaultTours = (): ToursByCategory => ({
  international: INTERNATIONAL_TOURS,
  domestic: DOMESTIC_TOURS,
  umrah: UMRAH_TOURS,
});

const groupTours = (tours: Tour[]): ToursByCategory => ({
  international: tours.filter((t) => t.category === 'International'),
  domestic: tours.filter((t) => t.category === 'Domestic'),
  umrah: tours.filter((t) => t.category === 'Umrah'),
});

const isEmpty = (tours: ToursByCategory) =>
  tours.international.length === 0 &&
  tours.domestic.length === 0 &&
  tours.umrah.length === 0;

export const fetchTours = async (forAdmin = false): Promise<ToursByCategory> => {
  const stored = getStoredTours();
  const grouped = groupTours(stored);

  if (!forAdmin && isEmpty(grouped)) {
    return defaultTours();
  }

  return grouped;
};

export const createTour = async (tour: Omit<Tour, 'id'>): Promise<Tour> => {
  const newTour: Tour = { ...tour, id: createTourId() };
  const tours = getStoredTours();
  tours.unshift(newTour);
  saveStoredTours(tours);
  return newTour;
};

export const updateTour = async (id: string, tour: Omit<Tour, 'id'>): Promise<Tour> => {
  const tours = getStoredTours();
  const index = tours.findIndex((t) => t.id === id);

  if (index === -1) {
    throw new Error('Tour not found');
  }

  const updated: Tour = { ...tour, id };
  tours[index] = updated;
  saveStoredTours(tours);
  return updated;
};

export const deleteTour = async (id: string): Promise<void> => {
  const tours = getStoredTours().filter((t) => t.id !== id);
  saveStoredTours(tours);
};
