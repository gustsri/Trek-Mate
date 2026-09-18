import { FeedQueryDto } from './feed.dto';

export class FeedService {
  async getHighlights() {
    return [
      { id: '1', title: 'Mae Tia Waterfall', memberCountText: '2/5', dateRangeText: '7-8 / 10 / 68' },
      { id: '2', title: 'Doi Khun tan', subtitle: 'ผมมาซ้ำสองหาเพื่อนครับ' },
    ];
  }

  async getFeedPosts(_query?: FeedQueryDto) {
    return [];
  }
}

export const feedService = new FeedService();
