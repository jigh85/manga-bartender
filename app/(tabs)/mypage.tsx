import { useRouter } from 'expo-router';
import { storage, StorageKeys } from '@/src/utils/storage';
import { MyPageScreen } from '@/src/screens/MyPageScreen';

export default function MyPageTab() {
  const router = useRouter();

  const handleLogout = async () => {
    await storage.removeItem(StorageKeys.USER_PROFILE);
    router.replace('/onboarding/splash');
  };

  const handleResetOnboarding = async () => {
    // 사용자 프로필 삭제
    await storage.removeItem(StorageKeys.USER_PROFILE);
    await storage.removeItem(StorageKeys.USER_EMOTION);
    await storage.removeItem(StorageKeys.USER_GENRE);
    // 온보딩 화면으로 이동
    router.replace('/onboarding/splash');
  };

  return (
    <MyPageScreen
      onLogout={handleLogout}
      onResetOnboarding={handleResetOnboarding}
    />
  );
}
