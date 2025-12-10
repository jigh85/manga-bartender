import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';

interface ExploreScreenProps {
  onSelectWebtoon?: (id: string) => void;
}

export const ExploreScreen: React.FC<ExploreScreenProps> = ({
  onSelectWebtoon,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // 모든 키워드 - 더 많은 옵션들
  const allKeywords = [
    '연애',
    '힐링',
    '성장드라마',
    '판타지',
    '일상',
    '웃음',
    '전투액션',
    '감동',
    '감정선',
    '무협',
    '미스터리',
    '로맨스',
    '스릴러',
    '공포',
    '블랙코미디',
    '일상글',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 검색창 */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={Colors.accent} />
          <TextInput
            style={styles.searchInput}
            placeholder="제목, 작가, 키워드 입력"
            placeholderTextColor={Colors.gray}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* 실시간 인기 키워드 */}
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <View style={styles.titleBar} />
            <Text style={styles.sectionTitle}>실시간 인기 키워드</Text>
          </View>
          <View style={styles.keywordGrid}>
            {allKeywords.map((keyword, index) => (
              <TouchableOpacity
                key={index}
                style={styles.keywordButton}
              >
                <Text style={styles.keywordText}>#{keyword}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.barDark,
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 32,
    borderWidth: 2,
    borderColor: Colors.accent,
    height: 50,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 8,
    fontSize: 14,
    color: Colors.darkGray,
  },
  section: {
    marginBottom: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleBar: {
    width: 4,
    height: 24,
    backgroundColor: Colors.accent,
    marginRight: 8,
    borderRadius: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
  keywordGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  keywordButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: Colors.barWood,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.accent,
  },
  keywordText: {
    fontSize: 13,
    color: Colors.gold,
    fontWeight: '600',
  },
});
