import { fetchProperties } from '@/utils/actions';
import type { PropertyCardProps } from '@/utils/types';
import { SearchParamsProps } from './CategoriesList';
import EmptyList from './EmptyList';
import PropertiesList from './PropertiesList';

const PropertiesContainer = async ({ category, search }: SearchParamsProps) => {
  const properties: PropertyCardProps[] = await fetchProperties({ search, category });

  if (properties.length === 0) {
    return (
      <EmptyList heading="No results" message="Try changing or removing some of our filters" />
    );
  }
  return <PropertiesList properties={properties} />;
};

export default PropertiesContainer;
