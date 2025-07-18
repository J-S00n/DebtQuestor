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
