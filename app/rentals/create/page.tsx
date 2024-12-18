import AmenitiesInput from '@/components/form/Amenities';
import { SubmitButton } from '@/components/form/Buttons';
import CategoriesInput from '@/components/form/CategoriesInput';
import CounterInput from '@/components/form/CounterInput';
import CountriesInput from '@/components/form/CountriesInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { createPropertyAction } from '@/utils/actions';

const CreatePropertyPage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create a property</h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">General info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput name="name" type="text" label="Name (20 limit)" defaultValue="Spain" />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (30 limit)"
              defaultValue="Dream Gateway Awaits You Here"
            />
            <PriceInput />
            <CategoriesInput />
          </div>
          <TextAreaInput name="description" labelText="Description (10 - 100)" />
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <CountriesInput />
            <ImageInput />
          </div>
          <h3 className="text-lg mt-8 mb-4 font-medium">Accomodation Details</h3>
          <CounterInput detail="guests" />
          <CounterInput detail="bedrooms" />
          <CounterInput detail="beds" />
          <CounterInput detail="baths" />
          <h3 className="text-lg mt-8 mb-4 font-medium">Amenities</h3>
          <AmenitiesInput />
          <SubmitButton text="Create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreatePropertyPage;
