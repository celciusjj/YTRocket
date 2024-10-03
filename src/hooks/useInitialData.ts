import { useEffect } from 'react';
import { persistData } from '../store.ts/persist';
import { profileInfo } from '../models/profile';

export const useInitialData = () => {
  useEffect(() => {
    const data = persistData.get('data_rocket');
    if (data) return;
    persistData.save('data_rocket', profileInfo);
  }, []);
  return {};
};
