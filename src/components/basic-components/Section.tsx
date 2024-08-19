import React from "react";
import SectionTitle from "./Section-title";

interface SectionProps {
  title?: string;
  children: any;
  fullHeight?: boolean;
  hideTittle?: boolean;
  animateLeft?: Boolean;
  animateRight?: Boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  fullHeight = false,
  hideTittle = false,
  animateLeft,
  animateRight,
}) => {
  return (
    <section
      className={`w-full px-12 ${
        fullHeight ? "py-6 flex flex-col h-full" : "my-6"
      }
        ${animateLeft ? "hidden-animation hidden-animation-left" : ""}
        ${animateRight ? "hidden-animation hidden-animation-right" : ""}
        `}
    >
      {!hideTittle && title && <SectionTitle title={title} />}
      {fullHeight && <div className="grow">{children}</div>}
      {!fullHeight && children}
    </section>
  );
};

export default Section;
