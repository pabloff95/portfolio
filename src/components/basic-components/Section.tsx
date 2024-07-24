import React from "react";
import SectionTitle from "./Section-title";

interface SectionProps {
  title?: string;
  children: any;
  fullHeight?: boolean;
  hideTittle?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  fullHeight = false,
  hideTittle = false,
}) => {
  return (
    <section
      className={`w-full px-12 ${
        fullHeight ? "py-6 flex flex-col h-full" : "my-6"
      }`}
    >
      {!hideTittle && title && <SectionTitle title={title} />}
      {fullHeight && <div className="grow">{children}</div>}
      {!fullHeight && children}
    </section>
  );
};

export default Section;
