import { useState } from 'react';
import { UserProfile, UserMedal, TripHistoryItem } from '../types/profile.types';

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [medals, setMedals] = useState<UserMedal[]>([]);
  const [historyList, setHistoryList] = useState<TripHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return {
    profile,
    medals,
    historyList,
    isLoading
  };
}
