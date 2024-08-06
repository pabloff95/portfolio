interface StackItemPropsInterface {
  src: string;
  name: string;
}

const StackItem: React.FC<StackItemPropsInterface> = ({ src, name }) => {
  return (
    <div className="w-fit flex flex-col justify-center items-center">
      <div className="h-[10vh]">
        <img
          src={src}
          alt={name}
          className="h-full aspect-square img-shadow "
        />
      </div>
      <span className="font-impact">{name}</span>
    </div>
  );
};

export default StackItem;
