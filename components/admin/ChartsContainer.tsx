import Chart from '@/components/admin/Chart';
import { fetchChartsData } from '@/utils/actions';

const ChartsContainer = async () => {
  const bookings = await fetchChartsData();

  if (bookings.length === 0) {
    return null;
  }

  return (
    <div>
      <Chart data={bookings} />
    </div>
  );
};

export default ChartsContainer;
