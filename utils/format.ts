export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export function formatQuantity(quantity: number, noun: string): string {
  return quantity === 1 ? `${quantity} ${noun}` : `${quantity} ${noun}s`;
}

export const formatDate = (date: Date | string, onlyMonth?: boolean) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
  };

  if (!onlyMonth) {
    options.day = 'numeric';
  }

  return new Intl.DateTimeFormat('us-US', options).format(new Date(date));
};
