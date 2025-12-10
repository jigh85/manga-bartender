import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/src/constants/colors';

// Onboarding Screens
import { OnboardingSplash } from '@/src/screens/OnboardingSplash';
import { OnboardingEmotion } from '@/src/screens/OnboardingEmotion';
import { OnboardingGenre } from '@/src/screens/OnboardingGenre';
import { OnboardingComplete } from '@/src/screens/OnboardingComplete';

// Main Screens
import { HomeScreen } from '@/src/screens/HomeScreen';
import { ExploreScreen } from '@/src/screens/ExploreScreen';
import { MyPageScreen } from '@/src/screens/MyPageScreen';
import { CurationDetailScreen } from '@/src/screens/CurationDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Onboarding Stack
const OnboardingStack = () => {
  const [step, setStep] = useState(0);
  const [emotion, setEmotion] = useState<string | null>(null);

  const handleCompleteOnboarding = () => {
    setStep(-1); // Signal completion
  };

  if (step === -1) {
    return null; // Return to main app
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash">
        {() => <OnboardingSplash onStart={() => setStep(1)} />}
      </Stack.Screen>
      <Stack.Screen name="Emotion">
        {() => (
          <OnboardingEmotion
            onNext={(selectedEmotion) => {
              setEmotion(selectedEmotion);
              setStep(2);
            }}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Genre">
        {() => (
          <OnboardingGenre
            onNext={() => {
              setStep(3);
            }}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Complete">
        {() => (
          <OnboardingComplete
            onComplete={handleCompleteOnboarding}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

// Main App Stack
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="CurationDetail">
        {() => <CurationDetailScreen curatorId="1" />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

// Bottom Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: 'home' | 'compass' | 'person' = 'home';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'compass';
          } else if (route.name === 'MyPage') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.gray,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopColor: Colors.primary,
          borderTopWidth: 1,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ title: '홈' }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ title: '탐색' }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{ title: '마이페이지' }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [isOnboarded, setIsOnboarded] = useState(false);

  const handleOnboardingComplete = () => {
    setIsOnboarded(true);
  };

  return (
    <NavigationContainer>
      {isOnboarded ? (
        <TabNavigator />
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="OnboardingSplash"
        >
          <Stack.Screen name="OnboardingSplash">
            {() => (
              <OnboardingSplash
                onStart={() => {
                  // Go to emotion screen
                }}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="OnboardingEmotion">
            {() => <OnboardingEmotion onNext={() => {}} />}
          </Stack.Screen>
          <Stack.Screen name="OnboardingGenre">
            {() => <OnboardingGenre onNext={() => {}} />}
          </Stack.Screen>
          <Stack.Screen name="OnboardingComplete">
            {() => (
              <OnboardingComplete onComplete={handleOnboardingComplete} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
