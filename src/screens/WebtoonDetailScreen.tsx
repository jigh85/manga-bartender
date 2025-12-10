import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Colors } from '@/src/constants/colors';
import { MOCK_WEBTOONS } from '@/src/constants/mockData';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '@/src/components/PrimaryButton';

interface WebtoonDetailScreenProps {
  webtoonId: string;
  onBack?: () => void;
}

export const WebtoonDetailScreen: React.FC<WebtoonDetailScreenProps> = ({
  webtoonId,
  onBack,
}) => {
  const webtoon = MOCK_WEBTOONS.find((w) => w.id === webtoonId) || MOCK_WEBTOONS[0];

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
          <Text style={styles.headerTitle}>만화 상세</Text>
          <View style={styles.placeholder} />
        </View>

        {/* 만화 이미지 */}
        <View style={styles.imageContainer}>
          <View style={styles.webtoonImage}>
            <Image
              source={{ uri: webtoon.image }}
              style={{ width: '100%', height: '100%', borderRadius: 12 }}
              defaultSource={require('@/assets/images/icon.png')}
            />
          </View>
        </View>

        {/* 기본 정보 */}
        <View style={styles.infoSection}>
          <Text style={styles.webtoonTitle}>{webtoon.title}</Text>
          <View style={styles.tagsContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{webtoon.emotion}</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{webtoon.genre}</Text>
            </View>
          </View>
        </View>

        {/* 설명 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>작품 소개</Text>
          <Text style={styles.description}>{webtoon.description}</Text>
        </View>

        {/* 큐레이터 추천 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>큐레이터 추천 이유</Text>
          <View style={styles.curatorComment}>
            <View style={styles.curatorAvatar}>
              <Text style={styles.curatorAvatarText}>👤</Text>
            </View>
            <View style={styles.commentContent}>
              <Text style={styles.curatorName}>{webtoon.curator}</Text>
              <Text style={styles.commentText}>{webtoon.comment}</Text>
            </View>
          </View>
        </View>

        {/* 액션 버튼 */}
        <View style={styles.actionContainer}>
          <PrimaryButton
            label="이 작품 읽기"
            onPress={() => alert('만화를 열어봅니다!')}
          />
          <TouchableOpacity style={styles.secondaryButton}>
            <Ionicons name="bookmark" size={20} color={Colors.accent} />
            <Text style={styles.secondaryButtonText}>저장</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Ionicons name="share-social" size={20} color={Colors.accent} />
            <Text style={styles.secondaryButtonText}>공유</Text>
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
  imageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  webtoonImage: {
    width: 200,
    height: 280,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    overflow: 'hidden',
  },
  infoSection: {
    marginBottom: 24,
  },
  webtoonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.darkGray,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: Colors.accent,
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
  },
  description: {
    fontSize: 14,
    color: Colors.darkGray,
    lineHeight: 20,
  },
  curatorComment: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'flex-start',
  },
  curatorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  curatorAvatarText: {
    fontSize: 24,
  },
  commentContent: {
    flex: 1,
  },
  curatorName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.accent,
    marginBottom: 4,
  },
  commentText: {
    fontSize: 13,
    color: Colors.darkGray,
    lineHeight: 18,
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
    borderWidth: 1,
    borderColor: Colors.accent,
    borderRadius: 8,
  },
  secondaryButtonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.accent,
  },
});
