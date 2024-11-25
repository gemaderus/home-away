import { Separator } from '@/components/ui/separator';
import { calculateTotals } from '@/utils/calculateTotals';
import { formatCurrency } from '@/utils/format';
import { useProperty } from '@/utils/store';
import { Card, CardTitle } from '../ui/card';

const BookingForm = () => {
  const { range, price } = useProperty((state) => state);
  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;
  const { totalNights, subTotal, orderTotal, cleaning, service, tax } = calculateTotals({
    checkIn,
    checkOut,
    price,
  });

  return (
    <Card className="p-8 mb-4">
      <CardTitle className="mb-8">Booking Summary</CardTitle>
      <FormRow label={`${price} x ${totalNights} nights`} amount={subTotal} />
      <FormRow label="Cleaning Fee" amount={cleaning} />
      <FormRow label="Service Fee" amount={service} />
      <FormRow label="Tax" amount={tax} />
      <Separator className="mt-4" />
      <CardTitle className="mt-8">
        <FormRow label="Booking Total" amount={orderTotal} />
      </CardTitle>
    </Card>
  );
};

type FormRowType = {
  label: string;
  amount: number;
};

const FormRow = ({ label, amount }: FormRowType) => {
  return (
    <p className="flex justify-between text-sm mb-2">
      <span>{label}</span>

      <span>{formatCurrency(amount)}</span>
    </p>
  );
};

export default BookingForm;