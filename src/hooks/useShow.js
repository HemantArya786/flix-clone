import { useContext } from 'react';
import { ShowContext } from '../contexts/ShowContextDefinition';

export const useShow = () => {
  const context = useContext(ShowContext);
  if (!context) {
    throw new Error('useShow must be used within a ShowProvider');
  }
  return context;
};