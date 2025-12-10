import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageKeys = {
  USER_EMOTION: 'user_emotion',
  USER_GENRE: 'user_genre',
  SAVED_WEBTOONS: 'saved_webtoons',
  USER_PROFILE: 'user_profile',
};

export const storage = {
  setItem: async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Storage error:', error);
    }
  },

  getItem: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Storage error:', error);
      return null;
    }
  },

  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Storage error:', error);
    }
  },

  clear: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Storage error:', error);
    }
  },
};
