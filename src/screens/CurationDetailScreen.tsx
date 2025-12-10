import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Colors } from '@/src/constants/colors';
import { MOCK_WEBTOONS, MOCK_CURATORS } from '@/src/constants/mockData';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '@/src/components/PrimaryButton';

interface CurationDetailProps {
  curatorId: string;
  onBack?: () => void;
}

export const CurationDetailScreen: React.FC<CurationDetailProps> = ({
  curatorId,
  onBack,
}) => {
  const curator = MOCK_CURATORS.find((c) => c.id === curatorId) || MOCK_CURATORS[0];
  const curatorWebtoons = MOCK_WEBTOONS.filter(
    (w) => w.emotion === curator.emotion
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Ionicons
              name="chevron-back"
              size={24}
              color={Colors.darkGray}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>큐레이션 상세</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.curatorProfile}>
          <View style={styles.curatorIcon}>
            <Text style={styles.curatorIconText}>{curator.badge}</Text>
          </View>
          <View style={styles.curatorInfo}>
            <Text style={styles.curatorName}>{curator.nickname}</Text>
            <Text style={styles.curatorLevel}>{curator.level}</Text>
            <Text style={styles.followers}>팔로워 {curator.followers}</Text>
          </View>
        </View>

        <View style={styles.emotionTagContainer}>
          <View style={styles.emotionTag}>
            <Text style={styles.emotionTagText}>#{curator.emotion}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>큐레이션 작품</Text>
          {curatorWebtoons.map((webtoon) => (
            <View key={webtoon.id} style={styles.webtoonItem}>
              <View style={styles.webtoonImage} />
              <View style={styles.webtoonContent}>
                <Text style={styles.webtoonTitle}>{webtoon.title}</Text>
                <Text style={styles.webtoonGenre}>{webtoon.genre}</Text>
                <Text style={styles.comment}>{webtoon.comment}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.actionContainer}>
          <PrimaryButton
            label="이 큐레이터 팔로우"
            onPress={() => alert('팔로우되었습니다!')}
          />
          <TouchableOpacity style={styles.secondaryButton}>
            <Ionicons name="share-social" size={20} color={Colors.accent} />
            <Text style={styles.secondaryButtonText}>공유</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Ionicons name="bookmark" size={20} color={Colors.accent} />
            <Text style={styles.secondaryButtonText}>저장</Text>
          </TouchableOpacity>
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
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
  placeholder: {
    width: 40,
  },
  curatorProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent,
  },
  curatorIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.barWood,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 3,
    borderColor: Colors.accent,
  },
  curatorIconText: {
    fontSize: 32,
  },
  curatorInfo: {
    flex: 1,
  },
  curatorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
  curatorLevel: {
    fontSize: 12,
    color: Colors.gold,
    marginTop: 2,
    fontWeight: '600',
  },
  followers: {
    fontSize: 12,
    color: Colors.accent,
    marginTop: 2,
    fontWeight: '600',
  },
  emotionTagContainer: {
    marginBottom: 24,
  },
  emotionTag: {
    backgroundColor: Colors.barRed,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: Colors.accent,
  },
  emotionTagText: {
    fontSize: 12,
    color: Colors.gold,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.darkGray,
    marginBottom: 12,
    paddingLeft: 8,
    borderLeftWidth: 1,
    borderLeftColor: Colors.accent,
  },
  webtoonItem: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 12,
    backgroundColor: Colors.barDark,
    borderRadius: 8,
    borderLeftWidth: 1,
    borderLeftColor: Colors.accent,
  },
  webtoonImage: {
    width: 100,
    height: 140,
    backgroundColor: Colors.barWood,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 2,
    borderColor: Colors.accent,
  },
  webtoonContent: {
    flex: 1,
  },
  webtoonTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.darkGray,
    marginBottom: 4,
  },
  webtoonGenre: {
    fontSize: 12,
    color: Colors.gold,
    marginBottom: 8,
    fontWeight: '600',
  },
  comment: {
    fontSize: 12,
    color: Colors.gray,
    fontStyle: 'italic',
    lineHeight: 16,
  },
  actionContainer: {
    marginBottom: 32,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 12,
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 8,
    backgroundColor: Colors.barDark,
  },
  secondaryButtonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.accent,
  },
});
