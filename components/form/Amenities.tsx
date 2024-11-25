'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { amenities, Amenity } from '@/utils/amenities';
import { useState } from 'react';

const AmenitiesInput = ({ defaultValue }: { defaultValue?: Amenity[] }) => {
  const amenitiesWithIcons = defaultValue?.map(({ name, selected }) => {
    return {
      name,
      selected,
      icon: amenities.find((amenity) => amenity.name === name)!.icon,
    };
  });

  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
    amenitiesWithIcons || amenities,
  );

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
};

export default AmenitiesInput;
