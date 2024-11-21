'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-4">
      <ReviewLoadingCard />
      <ReviewLoadingCard />
    </div>
  );
};

const ReviewLoadingCard = () => {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <Skeleton className="w-[150px] h-4 mb-2" />
            <Skeleton className="w-[100px] h-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-40 h-4 bg-gray-200" />
      </CardContent>
    </Card>
  );
};
export default Loading;
