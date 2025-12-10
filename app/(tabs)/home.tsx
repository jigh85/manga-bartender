import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { HomeScreen } from '@/src/screens/HomeScreen';
import { storage, StorageKeys } from '@/src/utils/storage';

export default function HomeTab() {
  const router = useRouter();
  const [userEmotion, setUserEmotion] = useState<string | undefined>();
  const [userGenre, setUserGenre] = useState<string | undefined>();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const emotion = await storage.getItem(StorageKeys.USER_EMOTION);
      const genre = await storage.getItem(StorageKeys.USER_GENRE);
      setUserEmotion(emotion);
      setUserGenre(genre);
    } catch (error) {
      console.error('Failed to load user data:', error);
    }
  };

  const handleSelectWebtoon = (id: string) => {
    router.push(`/curation-detail?webtoonId=${id}`);
  };

  return (
    <HomeScreen
      onSelectWebtoon={handleSelectWebtoon}
      userEmotion={userEmotion}
      userGenre={userGenre}
    />
  );
}
