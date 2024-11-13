import Image from 'next/image';

type ImageContainerProps = {
  mainImage: string;
  name: string;
};

const ImageContainer = ({ mainImage, name }: ImageContainerProps) => {
  return (
    <section className="h-[300px] md:h-[500px] relative mt-8">
      <Image
        src={mainImage}
        alt={name}
        className="object-cover rounded"
        fill
        sizes="100vw"
        priority
      />
    </section>
  );
};

export default ImageContainer;
