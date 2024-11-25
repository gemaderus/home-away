import Link from 'next/link';
import { Button } from '../ui/button';

type EmptyListProps = {
  heading?: string;
  message?: string;
  btnText?: string;
};

const EmptyList = ({
  heading = 'No items in the list',
  message = 'Keep exploring our properties',
  btnText = 'back home',
}: EmptyListProps) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">{heading}</h2>
      <p className="text-lg">{message}</p>
      <Button className="mt-2">
        <Link href="/">{btnText}</Link>
      </Button>
    </div>
  );
};

export default EmptyList;
