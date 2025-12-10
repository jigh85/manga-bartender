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
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
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
                {emotion === '감동' && '💫'}
                {emotion === '설움' && '😢'}
                {emotion === '분노' && '🔥'}
                {emotion === '고요함' && '🌊'}
                {emotion === '설레임' && '🎉'}
              </Text>
            </View>
          </View>

          {/* 큐레이터 정보 */}
          <View style={styles.curatorSection}>
            <View style={styles.curatorIcon}>
              <Text>👤</Text>
            </View>
            <Text style={styles.curator}>{curator}</Text>
          </View>

          {/* 추천 코멘트 */}
          <View style={styles.commentSection}>
            <Text style={styles.comment} numberOfLines={2}>
              "{comment}"
            </Text>
          </View>

          {/* 액션 버튼 */}
          <View style={styles.actionBar}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="heart-outline" size={16} color={Colors.accent} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="bookmark-outline" size={16} color={Colors.accent} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="share-social-outline" size={16} color={Colors.accent} />
            </TouchableOpacity>
            <View style={styles.actionButtonSpacer} />
            <TouchableOpacity style={styles.readButton}>
              <Text style={styles.readButtonText}>읽기</Text>
              <Ionicons name="chevron-forward" size={14} color={Colors.background} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 14,
    overflow: 'hidden',
  },
  cardContent: {
    backgroundColor: Colors.barDark,
    borderWidth: 1,
    borderColor: Colors.barWood,
    borderRadius: 14,
    overflow: 'hidden',
  },

  // 이미지 영역
  imageWrapper: {
    height: 160,
    backgroundColor: Colors.barWood,
    position: 'relative',
    overflow: 'hidden',
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
    marginBottom: 10,
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
    borderRadius: 10,
    backgroundColor: Colors.barWood,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.accent,
    flexShrink: 0,
  },
  emotionIcon: {
    fontSize: 18,
  },

  // 큐레이터 섹션
  curatorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 6,
  },
  curatorIcon: {
    fontSize: 12,
  },
  curator: {
    fontSize: 12,
    color: Colors.gold,
    fontWeight: '600',
  },

  // 코멘트 섹션
  commentSection: {
    marginBottom: 12,
  },
  comment: {
    fontSize: 12,
    color: Colors.gray,
    fontStyle: 'italic',
    lineHeight: 16,
  },

  // 액션 바
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: Colors.barWood,
    marginTop: 10,
    gap: 12,
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  actionButtonSpacer: {
    flex: 1,
  },
  readButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.accent,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    gap: 4,
  },
  readButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.background,
  },
});
