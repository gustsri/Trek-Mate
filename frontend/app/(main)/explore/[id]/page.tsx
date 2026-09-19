import { ExploreDetailScreen } from '@/features/explore/components/ExploreDetailScreen';

export default async function ExploreDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ExploreDetailScreen pinId={id} />;
}
