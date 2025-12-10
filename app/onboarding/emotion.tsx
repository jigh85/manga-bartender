import { useRouter } from 'expo-router';
import { OnboardingEmotion } from '@/src/screens/OnboardingEmotion';
import { storage, StorageKeys } from '@/src/utils/storage';

export default function EmotionScreen() {
  const router = useRouter();

  const handleNext = async (emotion: string) => {
    await storage.setItem(StorageKeys.USER_EMOTION, emotion);
    router.push('/onboarding/genre');
  };

  return <OnboardingEmotion onNext={handleNext} />;
}
