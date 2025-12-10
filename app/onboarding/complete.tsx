import { useRouter } from 'expo-router';
import { OnboardingComplete } from '@/src/screens/OnboardingComplete';
import { storage, StorageKeys } from '@/src/utils/storage';

export default function CompleteScreen() {
  const router = useRouter();

  const handleComplete = async () => {
    const emotion = await storage.getItem(StorageKeys.USER_EMOTION);
    const genre = await storage.getItem(StorageKeys.USER_GENRE);

    const userProfile = {
      emotion,
      genre,
      completedAt: new Date().toISOString(),
    };

    await storage.setItem(StorageKeys.USER_PROFILE, userProfile);
    router.replace('/(tabs)/home');
  };

  return <OnboardingComplete onComplete={handleComplete} />;
}
