import React from "react";
import SectionTitle from "./Section-title";

interface SectionProps {
  title: string;
  children?: any;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="w-full px-12 my-6">
      <SectionTitle title={title} />
      {children}
    </section>
  );
};

export default Section;
