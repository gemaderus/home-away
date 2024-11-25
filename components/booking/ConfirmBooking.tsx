'use clients';

import { Button } from '@/components/ui/button';
import { createBookingAction } from '@/utils/actions';
import { useProperty } from '@/utils/store';
import { SignInButton, useAuth } from '@clerk/nextjs';
import { SubmitButton } from '../form/Buttons';
import FormContainer from '../form/FormContainer';

const ConfirmBooking = () => {
  const { userId } = useAuth();
  const { propertyId, range } = useProperty((state) => state);
  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;

  if (!userId)
    return (
      <SignInButton mode="modal">
        <Button type="button" className="w-full">
          Sign in to complete the booking
        </Button>
      </SignInButton>
    );

  const createBooking = createBookingAction.bind(null, { propertyId, checkIn, checkOut });

  return (
    <section>
      <FormContainer action={createBooking}>
        <SubmitButton text="Reserve" className="w-full" />
      </FormContainer>
    </section>
  );
};

export default ConfirmBooking;
