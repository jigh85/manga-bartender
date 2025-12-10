import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Colors } from '@/src/constants/colors';
import { EmotionButton } from '@/src/components/EmotionButton';
import { PrimaryButton } from '@/src/components/PrimaryButton';
import { EMOTIONS } from '@/src/constants/emotions';

interface OnboardingEmotionProps {
  onNext: (emotion: string) => void;
}

export const OnboardingEmotion: React.FC<OnboardingEmotionProps> = ({
  onNext,
}) => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>지금 당신의 기분은 어떤가요?</Text>
        <Text style={styles.subtitle}>
          맞춤 큐레이션을 위해 현재 감정을 선택해주세요
        </Text>

        <View style={styles.emotionContainer}>
          {EMOTIONS.map((emotion) => (
            <EmotionButton
              key={emotion}
              label={emotion}
              isSelected={selectedEmotion === emotion}
              onPress={() => setSelectedEmotion(emotion)}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            label="다음으로 →"
            onPress={() => onNext(selectedEmotion!)}
            disabled={!selectedEmotion}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.darkGray,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: Colors.gold,
    marginBottom: 32,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  emotionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 60,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
