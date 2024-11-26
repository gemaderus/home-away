import { Card, CardHeader } from '../ui/card';

type StatsCardProps = {
  title: string;
  value: number | string;
};

const StatsCard = ({ title, value }: StatsCardProps) => {
  return (
    <Card className="bg-muted">
      <CardHeader className="flex justify-between flex-row items-center">
        <h3 className="text-3xl font-bold capitalize">{title}</h3>
        <span className="text-primary text-5xl font-extrabold">{value}</span>
      </CardHeader>
    </Card>
  );
};

export default StatsCard;
