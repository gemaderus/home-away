import { fetchPropertyRating } from '@/utils/actions';
import { FaStar } from 'react-icons/fa';

type PropertyRatingProps = {
  propertyId: string;
  inPage: boolean;
};

const PropertyRating = async ({ inPage, propertyId }: PropertyRatingProps) => {
  const { rating, count } = await fetchPropertyRating(propertyId);

  if (count === 0) return null;

  const className = `flex gap-1 items-center ${inPage ? 'text-md' : 'text-xm'}`;
  const countText = count > 1 ? 'reviews' : 'review';
  const countValue = `${count} ${inPage ? countText : ''}`;

  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} ({countValue})
    </span>
  );
};

export default PropertyRating;
