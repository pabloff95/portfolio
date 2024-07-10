import React from "react";

interface BackgroundCardProps {
  title: string;
  degreeType: string;
  place: string;
  from: string;
  to: string;
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({
  title,
  degreeType,
  place,
  from,
  to,
}) => {
  return (
    <div className="w-full text-lg flex gap-6 bg-dark-bg p-4 rounded-2xl shadow-box-primary">
      <section className="flex flex-col justify-between items-center">
        <span className="font-bold">{from}</span>
        <span className="w-0.5 h-4 bg-font-base"></span>
        <span className="font-bold">{to}</span>
      </section>
      <div className="w-0.5 h-auto bg-font-base rounded-lg"></div>
      <section className="grow">
        <p className="text-2xl font-bold">{title}</p>
        <p className="opacity-90">{degreeType}</p>
        <p className="opacity-90">{place}</p>
      </section>
    </div>
  );
};

export default BackgroundCard;
