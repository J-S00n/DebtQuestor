import { createContext, useContext, useState } from 'react';

interface StreakContextType {
    streak: number;
    incrementStreak: () => void;
    resetStreak: () => void;
}

const StreakContext = createContext<StreakContextType | undefined>(undefined);

export const StreakProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [streak, setStreak] = useState(0);

    const incrementStreak = () => {
        setStreak(prevStreak => prevStreak + 1);
    };

    const resetStreak = () => {
        setStreak(0);
    };

    return (
        <StreakContext.Provider value={{ streak, incrementStreak, resetStreak }}>
            {children}
        </StreakContext.Provider>
    );
};

export const useStreakContext = () => useContext(StreakContext);