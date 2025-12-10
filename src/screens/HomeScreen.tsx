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
        contentContainerStyle={styles.scrollContent}
      >
        {/* 헤더 섹션 */}
        <View style={styles.header}>
          <Text style={styles.greeting}>안녕하세요! 👋</Text>
          <Text style={styles.mainTitle}>당신을 위한 만화</Text>
          <Text style={styles.subTitle}>감정에 맞춘 맞춤형 큐레이션</Text>
        </View>

        {/* 사용자 선택 카드 - 프로모션 스타일 */}
        {(userEmotion || userGenre) && (
          <View style={styles.promoCard}>
            <View style={styles.promoBadge}>
              <Text style={styles.promoBadgeText}>맞춤 추천</Text>
            </View>
            <Text style={styles.promoTitle}>당신의 취향을 발견했어요!</Text>
            <View style={styles.selectionPills}>
              {userEmotion && (
                <View style={styles.pill}>
                  <Text style={styles.pillEmoji}>🎭</Text>
                  <Text style={styles.pillText}>{userEmotion}</Text>
                </View>
              )}
              {userGenre && (
                <View style={styles.pill}>
                  <Text style={styles.pillEmoji}>📖</Text>
                  <Text style={styles.pillText}>{userGenre}</Text>
                </View>
              )}
            </View>
          </View>
        )}

        {/* 추천 만화 섹션 */}
        <View style={styles.webtoonSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>추천 컨텐츠</Text>
            <Text style={styles.sectionCount}>{filteredWebtoons.length}</Text>
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
  
  // 프로모션 카드
  promoCard: {
    backgroundColor: Colors.barDark,
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 20,
    marginBottom: 32,
    borderWidth: 1.5,
    borderColor: Colors.accent,
    overflow: 'hidden',
  },
  promoBadge: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.accent,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 12,
  },
  promoBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.background,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.darkGray,
    marginBottom: 14,
    lineHeight: 24,
  },
  selectionPills: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  pill: {
    backgroundColor: Colors.barWood,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1.5,
    borderColor: Colors.accent,
  },
  pillEmoji: {
    fontSize: 16,
  },
  pillText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.darkGray,
  },
  
  // 만화 섹션
  webtoonSection: {
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.darkGray,
  },
  sectionCount: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.gold,
    backgroundColor: Colors.barDark,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.accent,
  },
});
