import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Colors } from '@/src/constants/colors';
import { PrimaryButton } from '@/src/components/PrimaryButton';

interface OnboardingSplashProps {
  onStart: () => void;
}

export const OnboardingSplash: React.FC<OnboardingSplashProps> = ({
  onStart,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🍷</Text>
          <Text style={styles.title}>만화 바텐더</Text>
        </View>

        <Text style={styles.subtitle}>
          당신의 하루엔 어떤 만화가 어울릴까요?
        </Text>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            감정에 맞는 만화를 큐레이션해드립니다
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            label="시작하기"
            onPress={onStart}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.gold,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  descriptionContainer: {
    marginVertical: 40,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: Colors.barDark,
    borderRadius: 8,
    borderLeftWidth: 1,
    borderLeftColor: Colors.accent,
  },
  description: {
    fontSize: 14,
    color: Colors.darkGray,
    textAlign: 'center',
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 40,
    width: '100%',
  },
});
