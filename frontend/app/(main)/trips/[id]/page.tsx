import { TripDetailScreen } from '@/features/find/components/TripDetailScreen';

export default async function TripDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <TripDetailScreen tripId={id} />;
}
