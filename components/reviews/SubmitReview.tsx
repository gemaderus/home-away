'use client';
import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import RatingInput from '@/components/form/RatingInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { createReviewAction } from '@/utils/actions';
import { useState } from 'react';

type SubmitReviewProps = {
  propertyId: string;
};

const SubmitReview = ({ propertyId }: SubmitReviewProps) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);

  return (
    <div className="mt-8">
      <Button onClick={() => setIsReviewFormVisible((prev) => !prev)}>
        <h1>Leave a review</h1>
      </Button>
      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="propertyId" value={propertyId} />
            <RatingInput name="rating" labelText="Rating" />
            <TextAreaInput
              name="comment"
              labelText="Your thougths on this properties"
              defaultValue="Amazing place!"
            />
            <SubmitButton className="mt-4" text="Submit" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
};

export default SubmitReview;
