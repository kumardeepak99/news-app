import React from "react";

export const LinkTypes = {
  EMAIL: "email",
  EXTERNAL: "external",
} as const;

type LinkButtonProps = {
  label: string;
  linkType: (typeof LinkTypes)[keyof typeof LinkTypes];
  link: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ label, linkType, link }) => {
  let href = link;
  let target = "_blank";

  if (linkType === LinkTypes.EMAIL) {
    href = `mailto:${link}`;
  } else if (linkType === LinkTypes.EXTERNAL) {
    if (!link.startsWith("http")) {
      href = `https://${link}`;
    }
  }

  return (
    <button className="text-blue-500 underline hover:text-yellow-600 focus:text-yellow-600">
      <a href={href} target={target} rel="noopener noreferrer">
        {label}
      </a>
    </button>
  );
};

export default LinkButton;
