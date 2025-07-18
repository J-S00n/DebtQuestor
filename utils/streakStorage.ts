import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveStreak = async (streak: number) => {
    try {
        await AsyncStorage.setItem('streak', streak.toString());
    } catch (error) {
        console.error('Error saving streak:', error);
    }
};

export const loadStreak = async (): Promise<number> => {
    try {
        const value = await AsyncStorage.getItem('streak');
        return value ? parseInt(value, 10) : 0;
    } catch (error) {
        console.error('Error loading streak:', error);
        return 0;
    }
}

export const clearStreak = async () => {
    try {
        await AsyncStorage.removeItem('streak');
    } catch (error) {
        console.error('Error clearing streak:', error);
    }
};

export const saveLastLogin = async (date: Date) => {
    try {
        await AsyncStorage.setItem('lastLogin', date.toISOString());
    } catch (error) {
        console.error('Error saving last login:', error);
    }
}

export const yesterdayLogin = async (): Promise<Date | null> => {
    try {
        const value = await AsyncStorage.getItem('lastLogin');
        if (value) {
            const lastLoginDate = new Date(value);
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            return lastLoginDate.toDateString() === yesterday.toDateString() ? lastLoginDate : null;
        }
        return null;
    } catch (error) {
        console.error('Error checking yesterday login:', error);
        return null;
    }
}
