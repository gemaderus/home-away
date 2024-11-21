import { CardSignInButton } from '@/components/form/Buttons';
import { fetchFavoriteId } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';
import FavoriteToggleForm from './FavoriteToggleForm';

type FavoriteToggleProps = {
  propertyId: string;
};

const FavoriteToggleButton = async ({ propertyId }: FavoriteToggleProps) => {
  const { userId } = auth();

  if (!userId) {
    return <CardSignInButton />;
  }

  const favoriteId = await fetchFavoriteId({ propertyId });

  return <FavoriteToggleForm propertyId={propertyId} favoriteId={favoriteId} />;
};

export default FavoriteToggleButton;
