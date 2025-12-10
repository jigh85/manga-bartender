import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '@/src/constants/colors';
import { MOCK_WEBTOONS } from '@/src/constants/mockData';
import { EMOTIONS } from '@/src/constants/emotions';
import { WebtoonCard } from '@/src/components/WebtoonCard';

interface HomeScreenProps {
  onSelectWebtoon?: (id: string) => void;
  userEmotion?: string;
  userGenre?: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectWebtoon,
  userEmotion,
  userGenre,
}) => {
  const [filteredWebtoons, setFilteredWebtoons] = useState(MOCK_WEBTOONS);

  useEffect(() => {
    // 사용자의 감정과 장르에 맞는 만화 필터링
    let filtered = MOCK_WEBTOONS;

    if (userEmotion && userGenre) {
      // 둘 다 선택된 경우: AND 조건
      filtered = filtered.filter(
        (webtoon) =>
          webtoon.emotion === userEmotion && webtoon.genre === userGenre
      );
    } else if (userEmotion) {
      // 감정만 선택된 경우
      filtered = filtered.filter((webtoon) => webtoon.emotion === userEmotion);
    } else if (userGenre) {
      // 장르만 선택된 경우
      filtered = filtered.filter((webtoon) => webtoon.genre === userGenre);
    }

    // 필터링 결과가 없으면 전체 목록 표시
    setFilteredWebtoons(filtered.length > 0 ? filtered : MOCK_WEBTOONS);
  }, [userEmotion, userGenre]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 헤더 섹션 */}
        <View style={styles.header}>
          <Text style={styles.greeting}>안녕하세요! 👋</Text>
          <Text style={styles.mainTitle}>당신을 위한 만화</Text>
          <Text style={styles.subTitle}>감정에 맞춘 맞춤형 큐레이션</Text>
        </View>

        {/* 추천 감정 섹션 */}
        <View style={styles.emotionSection}>
          <Text style={styles.sectionTitle}>추천 감정</Text>
          <View style={styles.emotionGrid}>
            {EMOTIONS.slice(0, 5).map((emotion) => (
              <TouchableOpacity
                key={emotion.id}
                style={styles.emotionCard}
                activeOpacity={0.7}
              >
                <Text style={styles.emotionEmoji}>{emotion.emoji}</Text>
                <Text style={styles.emotionName}>{emotion.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 추천 만화 섹션 */}
        <View style={styles.webtoonSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>추천 컨텐츠</Text>
          </View>
          <FlatList
            data={filteredWebtoons}
            renderItem={({ item }) => (
              <WebtoonCard
                id={item.id}
                title={item.title}
                emotion={item.emotion}
                curator={item.curator}
                comment={item.comment}
                onPress={() => onSelectWebtoon?.(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
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
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 40,
  },
  
  // 헤더 섹션
  header: {
    marginBottom: 28,
  },
  greeting: {
    fontSize: 14,
    color: Colors.gold,
    fontWeight: '500',
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.darkGray,
    lineHeight: 40,
    marginBottom: 6,
  },
  subTitle: {
    fontSize: 14,
    color: Colors.gray,
    fontWeight: '400',
    lineHeight: 20,
  },
  
  // 추천 감정 섹션
  emotionSection: {
    marginBottom: 28,
  },
  emotionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  emotionCard: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: Colors.barWood,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.accent,
  },
  emotionEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },
  emotionName: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.darkGray,
    textAlign: 'center',
  },
  
  // 만화 섹션
  webtoonSection: {
  },
  sectionHeader: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.darkGray,
  },
});
