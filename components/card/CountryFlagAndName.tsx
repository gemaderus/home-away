import { findCountryByCode } from '@/utils/countries';

type CountryFlagAndNameProps = {
  countryCode: string;
};

const CountryFlagAndName = ({ countryCode }: CountryFlagAndNameProps) => {
  const validCountry = findCountryByCode(countryCode);
  if (!validCountry) {
    return null;
  }

  const countryName =
    validCountry.name.length > 20 ? `${validCountry.name.slice(0, 20)}...` : validCountry.name;
  return (
    <span className="flex justify-between items-center gap-2 text-sm">
      {validCountry.flag} {countryName}
    </span>
  );
};

export default CountryFlagAndName;
