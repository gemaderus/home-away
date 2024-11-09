import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';

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
      <CategoriesList category={searchParams.category} />
      <PropertiesContainer />
    </section>
  );
};

export default HomePage;
