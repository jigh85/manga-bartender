import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Colors } from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';

interface WebtoonCardProps {
  id: string;
  title: string;
  emotion: string;
  curator: string;
  comment: string;
  onPress?: () => void;
}

export const WebtoonCard: React.FC<WebtoonCardProps> = ({
  id,
  title,
  emotion,
  curator,
  comment,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.cardContent}>
        {/* 이미지 영역 */}
        <View style={styles.imageWrapper}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.placeholderIcon}>🎨</Text>
          </View>
        </View>

        {/* 정보 영역 */}
        <View style={styles.infoSection}>
          {/* 제목 및 감정 태그 */}
          <View style={styles.headerRow}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            <View style={styles.emotionTag}>
              <Text style={styles.emotionIcon}>
                {emotion === '위로' && '🌙'}
                {emotion === '설렘' && '✨'}
                {emotion === '자극' && '⚡'}
                {emotion === '웃음' && '😄'}
                {emotion === '여운' && '🎭'}
              </Text>
            </View>
          </View>

          {/* 큐레이터 정보 */}
          <View style={styles.curatorSection}>
            <View style={styles.curatorBadge}>
              <Text style={styles.curatorBadgeIcon}>👤</Text>
            </View>
            <Text style={styles.curator}>{curator}</Text>
          </View>

          {/* 추천 코멘트 */}
          <View style={styles.commentSection}>
            <View style={styles.commentIcon}>
              <Text style={styles.commentIconText}>💬</Text>
            </View>
            <Text style={styles.comment} numberOfLines={2}>
              {comment}
            </Text>
          </View>

          {/* 액션 버튼 */}
          <View style={styles.actionBar}>
            <View style={styles.actionButton}>
              <Ionicons name="heart-outline" size={18} color={Colors.accent} />
              <Text style={styles.actionText}>추천</Text>
            </View>
            <View style={styles.actionButton}>
              <Ionicons name="bookmark-outline" size={18} color={Colors.accent} />
              <Text style={styles.actionText}>저장</Text>
            </View>
            <View style={styles.actionButton}>
              <Ionicons name="share-social-outline" size={18} color={Colors.accent} />
              <Text style={styles.actionText}>공유</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardContent: {
    backgroundColor: Colors.barDark,
    borderWidth: 1.5,
    borderColor: Colors.accent,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },

  // 이미지 영역
  imageWrapper: {
    height: 180,
    backgroundColor: Colors.barWood,
    position: 'relative',
    overflow: 'hidden',
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent,
  },
  imagePlaceholder: {
    flex: 1,
    backgroundColor: Colors.barWood,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderIcon: {
    fontSize: 56,
  },

  // 정보 영역
  infoSection: {
    padding: 14,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 10,
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    color: Colors.darkGray,
    lineHeight: 20,
  },
  emotionTag: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.barWood,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.accent,
  },
  emotionIcon: {
    fontSize: 18,
  },

  // 큐레이터 섹션
  curatorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  curatorBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.barWood,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.accent,
  },
  curatorBadgeIcon: {
    fontSize: 14,
  },
  curator: {
    fontSize: 12,
    color: Colors.gold,
    fontWeight: '600',
  },

  // 코멘트 섹션
  commentSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 8,
  },
  commentIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.barWood,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  commentIconText: {
    fontSize: 12,
  },
  comment: {
    flex: 1,
    fontSize: 12,
    color: Colors.gray,
    fontStyle: 'italic',
    lineHeight: 16,
  },

  // 액션 바
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.barWood,
    marginTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 6,
    flex: 1,
    borderRadius: 8,
  },
  actionText: {
    fontSize: 11,
    color: Colors.accent,
    fontWeight: '600',
  },
});
