import { categories } from '@/utils/categories';
import Link from 'next/link';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

export type SearchParamsProps = {
  category?: string;
  search?: string;
};

const CategoriesList = ({ category, search }: SearchParamsProps) => {
  const searchTerm = search ? `&search=${search}` : '';
  return (
    <section>
      <ScrollArea>
        <div className="flex gap-x-4">
          {categories.map((cat) => {
            const isActive = cat.label === category;

            return (
              <Link key={cat.label} href={`/?category=${cat.label}${searchTerm}`}>
                <article
                  className={`p-3 flex flex-col items-center cursor-pointer duration-300 hover:text-primary w-[100px] ${isActive ? 'text-primary' : ''}`}
                >
                  <cat.icon className="w-6 h-6" />
                  <span>{cat.label}</span>
                </article>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default CategoriesList;
