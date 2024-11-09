'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { amenities, Amenity } from '@/utils/amenities';
import { useState } from 'react';

function AmenitiesInput({ defaultValue }: { defaultValue?: Amenity[] }) {
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(defaultValue || amenities);

  const handleChange = (amenity: Amenity) => {
    setSelectedAmenities((prev) => {
      return prev.map((a) => {
        if (a.name === amenity.name) {
          return { ...a, selected: !a.selected };
        }
        return a;
      });
    });
  };

  return (
    <section>
      <input type="hidden" name="amenities" value={JSON.stringify(selectedAmenities)} />
      <ul className="grid grid-cols-3 gap-4">
        {selectedAmenities.map((amenity) => (
          <li key={amenity.name} className="flex">
            <Checkbox
              id={amenity.name}
              checked={amenity.selected}
              onCheckedChange={() => handleChange(amenity)}
            />
            <Label
              htmlFor={amenity.name}
              className="text-sm font-medium leading-none capitalize flex gap-x-2 items-center ml-2"
            >
              {amenity.name} <amenity.icon className="w-4 h-4" />
            </Label>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AmenitiesInput;
