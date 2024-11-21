import { IconButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import EmptyList from '@/components/home/EmptyList';
import Title from '@/components/properties/Title';
import ReviewCard from '@/components/reviews/ReviewCard';
import { deleteReviewAction, fetchPropertyReviewsByUser } from '@/utils/actions';

const ReviewsPage = async () => {
  const reviews = await fetchPropertyReviewsByUser();

  if (reviews.length === 0) return <EmptyList message="No reviews found" />;
  return (
    <>
      <Title title="My Reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4">
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { name, image } = review.property;
          const reviewInfo = {
            comment,
            rating,
            image,
            name,
          };
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
};

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });

  return (
    <FormContainer action={deleteReview}>
      <input type="hidden" name="reviewId" value={reviewId} />
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

export default ReviewsPage;
