import React from "react";
import { LinkedinLogoIcon, GlobeIcon } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-4 text-center text-sm text-gray-500">
      <p className="flex items-center justify-center gap-2 flex-wrap">
        Developed by{" "}
        <a
          href="https://github.com/brandonkamga"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-gray-800 hover:underline"
        >
          Brandon Kamga
        </a>
        <a
          href="https://linkedin.com/in/tonprofil"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700"
        >
          <LinkedinLogoIcon size={20} weight="bold" />
        </a>
        |
        <a
          href="https://tonsite.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700"
        >
          <GlobeIcon size={20} weight="bold" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
