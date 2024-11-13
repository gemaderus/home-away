import { CardSignInButton } from '@/components/form/Buttons';
import { fetchFavoriteId } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';
import { FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';
import FavoriteToggleForm from './FavoriteToggleForm';

type FavoriteToggleProps = {
  propertyId: string;
};

const FavoriteToggleButton = async ({ propertyId }: FavoriteToggleProps) => {
  const { userId } = auth();
  const favoriteId = await fetchFavoriteId({ propertyId });

  if (!userId) {
    return <CardSignInButton />;
  }

  return <FavoriteToggleForm propertyId={propertyId} favoriteId={favoriteId} />;
};

export default FavoriteToggleButton;
