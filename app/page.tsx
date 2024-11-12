import LoadingCard from '@/components/card/LoadingCard';
import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import { Suspense } from 'react';

type searchProps = {
  category?: string;
  search?: string;
};

type HomePageProps = {
  searchParams: searchProps;
};

const HomePage = ({ searchParams }: HomePageProps) => {
  return (
    <section>
      <CategoriesList category={searchParams.category} search={searchParams.search} />
      <Suspense fallback={<LoadingCard />}>
        <PropertiesContainer category={searchParams.category} search={searchParams.search} />
      </Suspense>
    </section>
  );
};

export default HomePage;
