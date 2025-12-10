import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import { Colors } from '@/src/constants/colors';
import { MOCK_WEBTOONS } from '@/src/constants/mockData';
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
      >
        {/* 헤더 섹션 */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.timeGreeting}>안녕하세요! 👋</Text>
              <Text style={styles.userName}>오늘의 감정은?</Text>
            </View>
          </View>
        </View>

        {/* 구분선 */}
        <View style={styles.divider} />

        {/* 감정 필터 섹션 */}
        <View style={styles.emotionSection}>
          <Text style={styles.sectionLabel}>추천 감정</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.emotionScroll}
          >
            {['위로', '설렘', '자극', '웃음', '여운'].map((emotion) => (
              <View key={emotion} style={styles.emotionCard}>
                <Text style={styles.emotionCardEmoji}>
                  {emotion === '위로' && '🌙'}
                  {emotion === '설렘' && '✨'}
                  {emotion === '자극' && '⚡'}
                  {emotion === '웃음' && '😄'}
                  {emotion === '여운' && '🎭'}
                </Text>
                <Text style={styles.emotionCardText}>{emotion}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* 구분선 */}
        <View style={styles.divider} />

        {/* 추천 만화 섹션 */}
        <View style={styles.webtoonSection}>
          <Text style={styles.sectionLabel}>바텐더의 추천</Text>
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
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  
  // 구분선
  divider: {
    height: 1,
    backgroundColor: Colors.barWood,
    marginHorizontal: 20,
    marginVertical: 8,
    opacity: 0.5,
  },
  
  // 헤더 섹션
  header: {
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  timeGreeting: {
    fontSize: 16,
    color: Colors.gold,
    fontWeight: '500',
    marginBottom: 4,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
  
  // 감정 섹션
  emotionSection: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.darkGray,
    marginBottom: 12,
    letterSpacing: 0.3,
  },
  emotionScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  emotionCard: {
    width: 70,
    height: 70,
    marginRight: 10,
    backgroundColor: Colors.barWood,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.accent,
  },
  emotionCardEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  emotionCardText: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.darkGray,
    textAlign: 'center',
  },
  
  // 만화 섹션
  webtoonSection: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    paddingBottom: 40,
  },
});
