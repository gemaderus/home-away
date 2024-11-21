import { FaRegStar, FaStar } from 'react-icons/fa';

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  const starts = Array.from({ length: 5 }, (_, index) => index + 1 <= rating);

  return (
    <div className="flex items-center gap-x-1">
      {starts.map((isFilled, index) => {
        const className = `w-3 h-3 ${isFilled ? 'text-primary' : 'text-gray-400'}`;
        return isFilled ? (
          <FaStar key={index} className={className} />
        ) : (
          <FaRegStar key={index} className={className} />
        );
      })}
    </div>
  );
};

export default Rating;
