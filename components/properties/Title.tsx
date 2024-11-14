type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return <h3 className="text-lg font-bold mb-2">{title}</h3>;
};

export default Title;
