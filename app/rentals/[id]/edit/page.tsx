import AmenitiesInput from '@/components/form/Amenities';
import { SubmitButton } from '@/components/form/Buttons';
import CategoriesInput from '@/components/form/CategoriesInput';
import CounterInput from '@/components/form/CounterInput';
import CountriesInput from '@/components/form/CountriesInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInputContainer from '@/components/form/ImageInputContainer';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import {
  fetchRentalsDetails,
  updatePropertyAction,
  updatePropertyImageAction,
} from '@/utils/actions';
import { type Amenity } from '@/utils/amenities';
import { redirect } from 'next/navigation';

const EditRentalPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const property = await fetchRentalsDetails(id);

  if (!property) {
    redirect('/');
  }

  const defaultAmenities: Amenity[] = JSON.parse(property.amenities);

  return (
    <section className="mt-16">
      <h1 className="text-2xl font-semibold mb-8 capitalize">Edit Property</h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          name={property.image}
          text="Update Image"
          action={updatePropertyImageAction}
          image={property.image}
        >
          <input type="hidden" name="id" value={property.id} />
        </ImageInputContainer>
      </div>
      <FormContainer action={updatePropertyAction}>
        <input type="hidden" name="id" value={property.id} />
        <div className="grid md:grid-cols-2 gap-8 mb-4 mt-8">
          <FormInput type="text" name="name" label="Name (20 limit)" defaultValue={property.name} />
          <FormInput
            type="text"
            name="tagline"
            label="Tagline (30 limit)"
            defaultValue={property.tagline}
          />
          <PriceInput defaultValue={property.price} />
          <CategoriesInput defaultValue={property.category} />
          <CountriesInput defaultValue={property.country} />
        </div>
        <TextAreaInput
          name="description"
          labelText="Description (10 - 100 words)"
          defaultValue={property.description}
        />
        <h3 className="text-lg mt-8 mb-4 font-medium">Accomodation Details</h3>
        <CounterInput detail="guests" defaultValue={property.guests} />
        <CounterInput detail="bedrooms" defaultValue={property.bedrooms} />
        <CounterInput detail="beds" defaultValue={property.beds} />
        <CounterInput detail="baths" defaultValue={property.baths} />
        <h3 className="text-lg mt-10 mb-6 font-medium">Amenities</h3>
        <AmenitiesInput defaultValue={defaultAmenities} />
        <SubmitButton text="Edit property" className="mt-12" />
      </FormContainer>
    </section>
  );
};

export default EditRentalPage;
