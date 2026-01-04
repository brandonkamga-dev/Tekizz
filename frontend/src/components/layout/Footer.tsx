import { LinkedinLogoIcon, GlobeIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <footer className="w-full py-2 text-sm text-gray-500">
      <div className="flex items-center justify-center gap-2">
        <span>{t('footer.developedBy')}</span>

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
        >
          <LinkedinLogoIcon size={18} />
        </a>
        |
        <a
          href="https://tonsite.com"
          target="_blank"
          rel="noreferrer"
        >
          <GlobeIcon size={18} />
        </a>
        |
        <a
          href="https://tonsite.com"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappLogoIcon size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
