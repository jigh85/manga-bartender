import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Colors } from '@/src/constants/colors';
import { PrimaryButton } from '@/src/components/PrimaryButton';

interface OnboardingCompleteProps {
  onComplete: () => void;
}

export const OnboardingComplete: React.FC<OnboardingCompleteProps> = ({
  onComplete,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentCenter}>
          <View style={styles.successContainer}>
            <Text style={styles.icon}>✨</Text>
            <Text style={styles.title}>추천 준비 완료!</Text>
          </View>

          <Text style={styles.subtitle}>
            선택하신 감정과 장르를 기반으로 맞춤 큐레이션을 준비했어요.
          </Text>

          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              이제 홈 화면에서 당신의 취향에 맞는 만화를 만나보세요.
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            label="홈으로 이동"
            onPress={onComplete}
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  contentCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.gold,
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '600',
  },
  messageContainer: {
    marginVertical: 30,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Colors.barWood,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: Colors.accent,
  },
  message: {
    fontSize: 14,
    color: Colors.gold,
    textAlign: 'center',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  buttonContainer: {
    marginTop: 0,
  },
});

