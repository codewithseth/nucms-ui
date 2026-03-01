import contact from "../../../../_timouy/assets/images/contact-us.png";
import mail from "../../../../_timouy/assets/images/mail.png";
import tel from "../../../../_timouy/assets/images/phone.png";
import facebook from "../../../../_timouy/assets/images/Facebook Outline.png";
import linkIn from "../../../../_timouy/assets/images/Linkedin Outline.png";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <div className="page about-page">
      <div className="page-wrapper flex gap-36 contact-us-section xs:flex-col xs:gap-0 xs:page-wrapper small">
        <div className="one">
          <h1 className="text-3xl xs:leading-tight" id="sub-title">
            {t("aboutus.contact.heading")}
          </h1>
          <div className="push"></div>
          <p className="md:text-sm lg:text-lg xs:hidden">{t("aboutus.contact.desc")}</p>
        </div>
        <div className="two flex flex-col gap-3">
          <p className="font-body flex gap-3 items-center">
            <img className="w-8 h-8" src={mail} alt="logo" />
            timouy.team@gmail.com
          </p>
          <p className="font-body flex gap-3 items-center">
            <img className="w-8 h-8" src={tel} alt="logo" />
            +855 987692334
          </p>
          <p className="font-body flex gap-3 items-center">
            <img className="w-8 h-8" src={facebook} alt="logo" />
            Timouy{" "}
          </p>
          <p className="font-body flex gap-3 items-center">
            <img className="w-8 h-8" src={linkIn} alt="logo" />
            Timouy{" "}
          </p>
        </div>
        <div className="three lg:mt-0 lg:col-span-5 " id="contact">
          <img src={contact} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
