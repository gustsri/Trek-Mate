import { useState } from 'react';
import { UserPostItem } from '../types/profile.types';

export function useUserPosts() {
  const [posts, setPosts] = useState<UserPostItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return {
    posts,
    setPosts,
    isLoading
  };
}
