import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [userStats, setUserStats] = useState({
    analysesUsed: 0,
    totalAnalyses: 10,
    connectionsMade: 3,
    monthlyGoal: 5,
    badges: ['First Analysis', 'Early Adopter']
  });

  const updateUserStats = (newStats) => {
    setUserStats(prev => ({ ...prev, ...newStats }));
  };

  const value = {
    user,
    setUser,
    analysisData,
    setAnalysisData,
    userStats,
    updateUserStats
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};