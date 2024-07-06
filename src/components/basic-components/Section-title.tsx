import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="w-full">
      <h2 className="font-impact text-4xl">{title}</h2>
      <div className="w-full bg-font-base h-1 rounded"></div>
    </div>
  );
};

export default SectionTitle;
