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
  onNext: (genres: string[]) => void;
}

export const OnboardingGenre: React.FC<OnboardingGenreProps> = ({ onNext }) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* 진행 단계 표시 */}
        <Text style={styles.stepIndicator}>2 / 2</Text>
        
        <Text style={styles.title}>좋아하는 장르를 선택하세요</Text>
        <Text style={styles.subtitle}>
          여러 개를 선택할 수 있습니다
        </Text>

        <View style={styles.genreContainer}>
          {GENRES.map((genre) => (
            <EmotionButton
              key={genre}
              label={genre}
              isSelected={selectedGenres.includes(genre)}
              onPress={() => toggleGenre(genre)}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            label="추천 준비 완료"
            onPress={() => onNext(selectedGenres)}
            disabled={selectedGenres.length === 0}
          />
        </View>
      </ScrollView>

      {/* 진행 상황 표시기 - 하단 */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: '100%' }]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  progressContainer: {
    height: 6,
    backgroundColor: Colors.barWood,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: Colors.accent,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  stepIndicator: {
    fontSize: 14,
    color: Colors.accent,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
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
    marginBottom: 40,
  },
  buttonContainer: {
    marginTop: 0,
    marginHorizontal: 0,
  },
});
