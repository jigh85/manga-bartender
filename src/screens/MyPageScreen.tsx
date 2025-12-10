import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';

interface MyPageScreenProps {
  onLogout?: () => void;
  onResetOnboarding?: () => void;
}

export const MyPageScreen: React.FC<MyPageScreenProps> = ({ onLogout, onResetOnboarding }) => {
  const emotionData = {
    '위로': 40,
    '설렘': 30,
    '자극': 20,
    '웃음': 10,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.profileIcon}>
            <Text style={styles.profileIconText}>😊</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>사용자님</Text>
            <Text style={styles.profileLevel}>🌟 바텐더 Lv.3</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>MY 바틀 (감정 아카이브)</Text>
          <View style={styles.bottleContainer}>
            {Object.entries(emotionData).map(([emotion, percentage]) => (
              <View key={emotion} style={styles.emotionRow}>
                <Text style={styles.emotionLabel}>{emotion}</Text>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${percentage}%`,
                        backgroundColor:
                          emotion === '위로'
                            ? '#FFB6C1'
                            : emotion === '설렘'
                            ? '#FFD700'
                            : emotion === '자극'
                            ? '#FF6347'
                            : '#87CEEB',
                      },
                    ]}
                  />
                </View>
                <Text style={styles.percentage}>{percentage}%</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>최근 본 작품</Text>
          <View style={styles.recentContainer}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.recentItem}>
                <View style={styles.recentImage} />
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>구독한 바텐더</Text>
          <View style={styles.curatorContainer}>
            {['@manga_sommelier', '@webtoon_lover', '@comfort_reader'].map(
              (curator, index) => (
                <TouchableOpacity key={index} style={styles.curatorItem}>
                  <Text style={styles.curatorName}>{curator}</Text>
                  <Ionicons
                    name="checkmark-done-circle"
                    size={20}
                    color={Colors.accent}
                  />
                </TouchableOpacity>
              )
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>설정</Text>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>알림 설정</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.gray}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>관심사 수정</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.gray}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={onResetOnboarding}
          >
            <Text style={[styles.settingText, { color: Colors.gray }]}>
              온보딩 다시 시작
            </Text>
            <Ionicons
              name="refresh"
              size={20}
              color={Colors.gray}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={onLogout}
          >
            <Text style={[styles.settingText, { color: Colors.accent }]}>
              로그아웃
            </Text>
            <Ionicons
              name="log-out"
              size={20}
              color={Colors.accent}
            />
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
    paddingTop: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent,
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.barWood,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 3,
    borderColor: Colors.accent,
  },
  profileIconText: {
    fontSize: 40,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkGray,
    marginBottom: 4,
  },
  profileLevel: {
    fontSize: 14,
    color: Colors.gold,
    fontWeight: '600',
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
  bottleContainer: {
    backgroundColor: Colors.barDark,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.accent,
  },
  emotionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  emotionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.gold,
    width: 50,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: Colors.lightGray,
    borderRadius: 4,
    marginHorizontal: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  percentage: {
    fontSize: 12,
    color: Colors.gold,
    width: 35,
    textAlign: 'right',
    fontWeight: '600',
  },
  recentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentItem: {
    width: '31%',
    aspectRatio: 0.7,
    backgroundColor: Colors.barWood,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.accent,
  },
  recentImage: {
    flex: 1,
  },
  curatorContainer: {
    backgroundColor: Colors.barDark,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.accent,
  },
  curatorItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  curatorName: {
    fontSize: 14,
    color: Colors.darkGray,
    fontWeight: '600',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  settingText: {
    fontSize: 14,
    color: Colors.darkGray,
    fontWeight: '600',
  },
});
