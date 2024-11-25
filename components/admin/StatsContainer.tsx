import StatsCard from '@/components/admin/StatsCard';
import { fetchStats } from '@/utils/actions';

const StatsContainer = async () => {
  const data = await fetchStats();

  return (
    <div className="mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <StatsCard title="users" value={data.usersCount || 0} />
      <StatsCard title="properties" value={data.propertiesCount || 0} />
      <StatsCard title="bookings" value={data.bookingsCount || 0} />
    </div>
  );
};

export default StatsContainer;
