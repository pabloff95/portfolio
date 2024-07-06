import React from "react";

interface ExternalLinkProps {
  url: string;
  openNewPage?: boolean;
  className?: string;
  children?: any;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  openNewPage = true,
  className,
  children,
}) => {
  return (
    <a
      href={url}
      target={openNewPage ? "_blank" : ""}
      className={`${className}`}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
