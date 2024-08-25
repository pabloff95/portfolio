import React, { ReactNode } from "react";

interface ExternalLinkProps {
  url: string;
  openNewPage?: boolean;
  className?: string;
  children?: ReactNode;
  showLinkClasses?: boolean;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  openNewPage = true,
  className,
  children,
  showLinkClasses = false,
}) => {
  const linkClasses =
    "underline text-primary-dark hover:text-primary-contrast w-fit";

  return (
    <a
      href={url}
      target={openNewPage ? "_blank" : ""}
      className={`${className} ${showLinkClasses ? linkClasses : ""}`}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
