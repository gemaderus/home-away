'use client';
import { Button } from '@/components/ui/button';
import { type actionFunction } from '@/utils/types';
import Image from 'next/image';
import { useState } from 'react';
import { LuUser2 } from 'react-icons/lu';
import { SubmitButton } from './Buttons';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

const ImageInputContainer = (props: ImageInputContainerProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { image, name, action, text, children } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  const userIcon = <LuUser2 size={20} className="w-24 h-24 bg-primary rounded text-white" />;

  return (
    <>
      <div>
        {image ? (
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="rounded object-cover mb-4 w-24 h-24"
          />
        ) : (
          userIcon
        )}
      </div>
      <Button variant="outline" size="sm" onClick={() => setIsUpdateFormVisible((prev) => !prev)}>
        Update profile image
      </Button>

      {isUpdateFormVisible && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </>
  );
};

export default ImageInputContainer;
