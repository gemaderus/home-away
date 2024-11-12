import { FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';

type FavoriteToggleProps = {
  propertyId: string;
};

const FavoriteToggleForm = ({ propertyId }: FavoriteToggleProps) => {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor pointer">
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleForm;
