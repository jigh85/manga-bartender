import { useRouter, useLocalSearchParams } from 'expo-router';
import { WebtoonDetailScreen } from '@/src/screens/WebtoonDetailScreen';

export default function CurationDetail() {
  const router = useRouter();
  const { webtoonId } = useLocalSearchParams();

  return (
    <WebtoonDetailScreen
      webtoonId={(webtoonId as string) || '1'}
      onBack={() => router.back()}
    />
  );
}
