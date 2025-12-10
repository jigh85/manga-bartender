import { useRouter } from 'expo-router';
import { OnboardingGenre } from '@/src/screens/OnboardingGenre';
import { storage, StorageKeys } from '@/src/utils/storage';

export default function GenreScreen() {
  const router = useRouter();

  const handleNext = async (genres: string[]) => {
    await storage.setItem(StorageKeys.USER_GENRE, genres.join(','));
    router.push('/onboarding/complete');
  };

  return <OnboardingGenre onNext={handleNext} />;
}
