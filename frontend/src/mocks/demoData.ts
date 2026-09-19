import type { UserMedal, UserPostItem, UserProfile, TripHistoryItem } from '@/features/profile/types/profile.types';
import type { ChatMessage, ChatRoomItem } from '@/features/chat/types/chat.types';
import type { MapLocationPin } from '@/features/explore/types/explore.types';
import type { RegionType, TripItem } from '@/features/find/types/trip.types';
import type { HomePost, QuickHighlight } from '@/features/home/types/home.types';

export const demoImages = {
  waterfall: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1400&q=85',
  pine: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=85',
  mountain: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1400&q=85',
  hikers: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1400&q=85',
  ridge: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
  forest: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85',
  sunset: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85',
  tunnel: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=85',
};

export const demoAvatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80';

export const demoHighlights: QuickHighlight[] = [
  { id: 'highlight-waterfall', title: 'Mae Tia Waterfall', subtitle: 'Find a mate', memberCountText: '2/5', dateRangeText: '7-8 / 10 / 68', imageUrl: demoImages.waterfall },
  { id: 'highlight-tunnel', title: 'Doi Khun Tan', subtitle: 'ผมมาซ้ำสองหาเพื่อนครับ', imageUrl: demoImages.tunnel },
];

export const demoPosts: HomePost[] = [
  { id: 'post-1', author: { id: 'usr-1', username: 'thanakrit_bost', avatarUrl: demoAvatar, locationName: 'น้ำตกทีลอซู' }, imageUrl: demoImages.hikers, caption: 'กราวด์ใจ', likesCount: 20, commentsCount: 8, createdAt: '25 December' },
  { id: 'post-2', author: { id: 'usr-1', username: 'thanakrit_bost', avatarUrl: demoAvatar, locationName: 'สนามภูเรือ' }, imageUrl: demoImages.pine, caption: 'หนาว', likesCount: 20, commentsCount: 4, createdAt: '1 January' },
];

export const demoTrips: TripItem[] = [
  { id: 'trip-phu-soi-dao', title: 'Phu Soi Dao', description: 'นั่งรถไฟจากกรุงเทพรอบสองทุ่มครับ', region: 'Northern', currentMembers: 2, maxMembers: 5, dateRangeText: '2-5 / 1 / 68', coverImageUrl: demoImages.mountain },
  { id: 'trip-phu-soi-dao-2', title: 'Phu Soi Dao', description: 'พร้อมเปียก', region: 'Northern', currentMembers: 3, maxMembers: 6, dateRangeText: '1-3 / 9 / 68', coverImageUrl: demoImages.pine },
  { id: 'trip-khun-tan', title: 'Doi Khun Tan', description: 'ผมมาซ้ำสองหาเพื่อนครับ', region: 'Northern', currentMembers: 1, maxMembers: 4, dateRangeText: '5-6 / 7 / 68', coverImageUrl: demoImages.tunnel },
  { id: 'trip-mae-tia', title: 'Mae Tia Waterfall', description: 'หาเพื่อนนั่งจิบกาแฟ', region: 'Northern', currentMembers: 2, maxMembers: 5, dateRangeText: '7-8 / 10 / 68', coverImageUrl: demoImages.waterfall },
];

export const demoPins: MapLocationPin[] = [
  { id: 'pin-mae-tia', name: 'Mae Tia Waterfall', region: 'Northern', latitude: 18.5, longitude: 98.6, thumbnailUrl: demoImages.waterfall },
  { id: 'pin-phu-soi-dao', name: 'Phu Soi Dao', region: 'Northern', latitude: 17.7, longitude: 100.9, thumbnailUrl: demoImages.mountain },
  { id: 'pin-doi-khun-tan', name: 'Doi Khun Tan', region: 'Northern', latitude: 18.4, longitude: 99.2, thumbnailUrl: demoImages.tunnel },
  { id: 'pin-phu-kradueng', name: 'Phu Kradueng', region: 'Northeastern', latitude: 16.9, longitude: 101.8, thumbnailUrl: demoImages.ridge },
  { id: 'pin-khao-yai', name: 'Khao Yai', region: 'Central', latitude: 14.4, longitude: 101.4, thumbnailUrl: demoImages.forest },
];

export const demoRooms: ChatRoomItem[] = [
  { id: 'room-1', title: 'Kamut', isGroup: true, avatarUrls: [demoAvatar], lastMessage: 'เรา โอ๊ต ฟอส มูมู่', lastMessageTime: '16:04', unreadCount: 1 },
  { id: 'room-2', title: 'Phu Kra Dung', isGroup: true, avatarUrls: [demoAvatar], lastMessage: 'CHK : ไปวันไหน', lastMessageTime: '1:00', unreadCount: 0 },
  { id: 'room-3', title: 'Kongpop Lai', isGroup: false, avatarUrls: [demoAvatar], lastMessage: 'me : ไม่น่าจะว่างนะวันนั้น', lastMessageTime: 'Yesterday', unreadCount: 0 },
  { id: 'room-4', title: 'Monalisao', isGroup: false, avatarUrls: [demoAvatar], lastMessage: 'Hello', lastMessageTime: 'Sunday', unreadCount: 0 },
];

export const demoMessages: ChatMessage[] = [
  { id: 'message-1', roomId: 'room-1', senderId: 'usr-2', text: '16-20 ว่างวันไหน', sentAt: '16:00', isMe: false },
  { id: 'message-2', roomId: 'room-1', senderId: 'usr-1', text: 'ทำไมจะไปไหน', sentAt: '16:01', isMe: true },
  { id: 'message-3', roomId: 'room-1', senderId: 'usr-2', text: 'อยากไปเดินป่าใต้', sentAt: '16:02', isMe: false },
  { id: 'message-4', roomId: 'room-1', senderId: 'usr-2', text: 'เขาหมวน จ.นครศรีธรรมราช', sentAt: '16:02', isMe: false },
  { id: 'message-5', roomId: 'room-1', senderId: 'usr-1', text: 'เออเอาดีไปๆ', sentAt: '16:03', isMe: true },
  { id: 'message-6', roomId: 'room-1', senderId: 'usr-1', text: 'มีใครบ้าง', sentAt: '16:03', isMe: true },
  { id: 'message-7', roomId: 'room-1', senderId: 'usr-2', text: 'เรา โอ๊ต ฟอส มูมู่', sentAt: '16:04', isMe: false },
];

export const demoProfile: UserProfile = {
  id: 'usr-1', username: 'thanakrit_bost', displayName: 'Thanakrit Anusornwutt', avatarUrl: demoAvatar, isVerified: true, friendsCount: 40, tripsCount: 5,
};

export const demoMedals: UserMedal[] = [
  { id: 'medal-1', title: 'First summit', badgeType: 'number-one', unlockedAt: '2026-01-01' },
  { id: 'medal-2', title: 'Golden route', badgeType: 'golden-route', unlockedAt: '2026-02-12' },
  { id: 'medal-3', title: 'Tunnel walker', badgeType: 'tunnel', unlockedAt: '2026-03-20' },
];

export const demoHistory: TripHistoryItem[] = [
  { id: 'history-1', destinationName: 'Khuntan', dateRangeText: '8-9 / 10 / 68', coverImageUrl: demoImages.tunnel },
  { id: 'history-2', destinationName: 'Phu Kra Dung', dateRangeText: '10-12 / 8 / 68', coverImageUrl: demoImages.ridge },
  { id: 'history-3', destinationName: 'Khuntan', dateRangeText: '5-6 / 7 / 68', coverImageUrl: demoImages.tunnel },
  { id: 'history-4', destinationName: 'Phu Kra Dung', dateRangeText: '15-16 / 1 / 68', coverImageUrl: demoImages.sunset },
];

export const demoFriends = [
  { id: 'friend-1', name: 'Kamut', avatarUrl: demoAvatar, medal: 'number-one' },
  { id: 'friend-2', name: 'Phu Kra Dung', avatarUrl: demoImages.hikers, medal: undefined },
  { id: 'friend-3', name: 'Kongpop Lai', avatarUrl: demoImages.pine, medal: 'golden-route' },
  { id: 'friend-4', name: 'Monalisao', avatarUrl: demoImages.sunset, medal: undefined },
  { id: 'friend-5', name: 'Fair', avatarUrl: demoImages.forest, medal: undefined },
  { id: 'friend-6', name: 'Mook', avatarUrl: demoImages.mountain, medal: undefined },
];

export const allRegions: RegionType[] = ['All', 'Northern', 'Central', 'Southern', 'Eastern', 'Western', 'Northeastern'];
