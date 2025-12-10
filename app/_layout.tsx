import { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useIPhoneLayout } from '@/src/hooks/useIPhoneLayout';
import { storage, StorageKeys } from '@/src/utils/storage';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isOnboarded, setIsOnboarded] = useState<boolean | null>(null);

  // iPhone 레이아웃 적용 (웹에서만)
  useIPhoneLayout();

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const userProfile = await storage.getItem(StorageKeys.USER_PROFILE);
      setIsOnboarded(!!userProfile);
    } catch (error) {
      setIsOnboarded(false);
    }
  };

  if (isOnboarded === null) {
    return null; // Loading
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {isOnboarded ? (
          <>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="curation-detail"
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="onboarding/splash"
              options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
              name="onboarding/emotion"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="onboarding/genre"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="onboarding/complete"
              options={{ headerShown: false, animationEnabled: false }}
            />
          </>
        )}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
