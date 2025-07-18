import { createContext, useContext, useState, useEffect } from 'react';
import { loadStreak, saveStreak, clearStreak, saveLastLogin, yesterdayLogin } from '@/utils/streakStorage'; 

interface StreakContextType {
    streak: number;
    incrementStreak: () => void;
    resetStreak: () => void;
}

const StreakContext = createContext<StreakContextType | undefined>(undefined);

export const StreakProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        const fetchStreak = async () => {
            const savedStreak = await loadStreak();
            const lastLogin = await yesterdayLogin();
            if (lastLogin) {
                setStreak(savedStreak + 1);
                await saveStreak(savedStreak + 1);
            } else {
                setStreak(1);
                await saveStreak(1);
            }
            await saveLastLogin(new Date());
        };

        fetchStreak();
    }, []);

    const incrementStreak = () => {
        setStreak(prevStreak => prevStreak + 1);
    };

    useEffect(() => {
        saveStreak(streak);
    }, [streak]);

    const resetStreak = () => {
        setStreak(0);
        clearStreak();
    };

    return (
        <StreakContext.Provider value={{ streak, incrementStreak, resetStreak }}>
            {children}
        </StreakContext.Provider>
    );
};

export const useStreakContext = () => {
    const context = useContext(StreakContext);
    if (context === undefined) {
        throw new Error('useStreakContext must be used within a StreakProvider');
    }
    return context;
}