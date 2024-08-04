import React from "react";

interface ExternalLinkProps {
  url: string;
  openNewPage?: boolean;
  className?: string;
  children?: any;
  showLinkClasses?: boolean;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  openNewPage = true,
  className,
  children,
  showLinkClasses = false,
}) => {
  const linkClasses = "underline text-primary-dark hover:text-primary-contrast";

  return (
    <a
      href={url}
      target={openNewPage ? "_blank" : ""}
      className={`${className} ${showLinkClasses ? linkClasses : ""}`}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
