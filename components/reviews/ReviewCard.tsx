import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import Comments from './Comments';
import Rating from './Rating';

type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
  };
  children?: React.ReactNode;
};

const ReviewCard = ({ reviewInfo, children }: ReviewCardProps) => {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <img src={reviewInfo.image} alt="profile" className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <h3 className="text-sm font-bold capitalize mb-1">{reviewInfo.name}</h3>
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
        <p className="mt-4">{reviewInfo.comment}</p>
      </CardHeader>
      <CardContent>
        <Comments comment={reviewInfo.comment} />
      </CardContent>
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
};

export default ReviewCard;
