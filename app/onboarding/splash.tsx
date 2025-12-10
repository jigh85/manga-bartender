import { useRouter } from 'expo-router';
import { OnboardingSplash } from '@/src/screens/OnboardingSplash';

export default function SplashScreen() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/onboarding/emotion');
  };

  return <OnboardingSplash onStart={handleStart} />;
}
