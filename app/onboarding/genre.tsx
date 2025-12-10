import { useRouter } from 'expo-router';
import { OnboardingGenre } from '@/src/screens/OnboardingGenre';
import { storage, StorageKeys } from '@/src/utils/storage';

export default function GenreScreen() {
  const router = useRouter();

  const handleNext = async (genre: string) => {
    await storage.setItem(StorageKeys.USER_GENRE, genre);
    router.push('/onboarding/complete');
  };

  return <OnboardingGenre onNext={handleNext} />;
}
