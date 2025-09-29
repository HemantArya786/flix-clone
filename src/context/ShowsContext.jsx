import React, { createContext, useContext, useEffect, useState } from 'react';

const ShowsContext = createContext();

export const useShows = () => {
  const context = useContext(ShowsContext);
  if (!context) {
    throw new Error('useShows must be used within a ShowsProvider');
  }
  return context;
};

export const ShowsProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchShows = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://flix-clone-api.vercel.app/api/shows');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      // API returns { success: boolean, data: array }
      setShows(result.data || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching shows:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  const value = {
    shows,
    loading,
    error,
    refreshShows: fetchShows
  };

  return (
    <ShowsContext.Provider value={value}>
      {children}
    </ShowsContext.Provider>
  );
};