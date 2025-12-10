import { useRouter } from 'expo-router';
import { ExploreScreen } from '@/src/screens/ExploreScreen';

export default function ExploreTab() {
  const router = useRouter();

  const handleSelectWebtoon = (id: string) => {
    router.push(`/curation-detail?curatorId=${id}`);
  };

  return <ExploreScreen onSelectWebtoon={handleSelectWebtoon} />;
}
