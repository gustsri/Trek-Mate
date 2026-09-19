'use client';

import { useState } from 'react';
import { FeedTabType } from '../types/home.types';

export function useHomeFeed() {
  const [activeTab, setActiveTab] = useState<FeedTabType>('friend');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return {
    activeTab,
    setActiveTab,
    isLoading
  };
}
