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
import { GENRES } from '@/src/constants/emotions';

interface OnboardingGenreProps {
  onNext: (genre: string) => void;
}

export const OnboardingGenre: React.FC<OnboardingGenreProps> = ({ onNext }) => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>오늘은 어떤 이야기가 끌리나요?</Text>
        <Text style={styles.subtitle}>
          선호하는 장르를 선택하면 맞춤 추천을 시작합니다
        </Text>

        <View style={styles.genreContainer}>
          {GENRES.map((genre) => (
            <EmotionButton
              key={genre}
              label={genre}
              isSelected={selectedGenre === genre}
              onPress={() => setSelectedGenre(genre)}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            label="추천 준비 완료"
            onPress={() => onNext(selectedGenre!)}
            disabled={!selectedGenre}
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
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 60,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
