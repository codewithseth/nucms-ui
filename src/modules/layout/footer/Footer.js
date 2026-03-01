'use client';
import { Footer } from 'flowbite-react';
import mail from '../../../_timouy/assets/images/mail.png'
import tel from '../../../_timouy/assets/images/phone.png'
import facebook from '../../../_timouy/assets/images/Facebook Outline.png'
import linkIn from '../../../_timouy/assets/images/Linkedin Outline.png'
import logo from '../../../_timouy/assets/svg/logo.svg'
import { useTranslation } from "react-i18next";

function MyFooter() {
  const { t } = useTranslation();
  
  return (
    <Footer container>
      <div className="mx-auto w-full sm:px-4 lg:py-4">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:flex-col lg:flex-row">
          <div className="flex flex-col gap-5 xs:mb-4">
            <span className="flex gap-2 text-3xl font-body">
              <img className="w-8 h-8" src={logo} alt="logo" />
              {t("footer.heading")}
            </span>
            <div className="lg:flex lg:flex-col lg:gap-3 xs:flex xs:flex-col xs:gap-3 xs:mt-3">
              <p className="md:hidden lg:flex lg:gap-3 lg:items-center xs:flex xs:gap-2 xs:items-center">
                <img className="w-8 h-8" src={mail} alt="logo" />
                timouy.team@gmail.com
              </p>
              <p className="md:hidden lg:flex lg:gap-3 lg:items-center xs:flex xs:gap-2 xs:items-center">
                <img className="w-8 h-8" src={tel} alt="logo" />
                +855 987692334
              </p>
              <p className="md:hidden lg:flex lg:gap-3 lg:items-center xs:flex xs:gap-2 xs:items-center">
                <img className="w-8 h-8" src={facebook} alt="logo" />
                Timouy{" "}
              </p>
              <p className="md:hidden lg:flex lg:gap-3 lg:items-center xs:flex xs:gap-2 xs:items-center">
                <img className="w-8 h-8" src={linkIn} alt="logo" />
                Timouy{" "}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 xs:grid-cols-3">
            <div>
              <Footer.Title
                title={t("footer.overview.heading")}
                className="font-body"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="font-body">
                  {t("footer.overview.guideline")}
                </Footer.Link>
                <Footer.Link href="#" className="font-body">
                  {t("footer.overview.userdashboard")}
                </Footer.Link>
                <Footer.Link href="#" className="font-body">
                  {t("footer.overview.feature")}
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title={t("footer.about.heading")}
                className="font-body"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="font-body">
                  {t("footer.about.core")}
                </Footer.Link>
                <Footer.Link href="#" className="font-body">
                  {t("footer.about.team")}
                </Footer.Link>
                <Footer.Link href="#" className="font-body">
                  {t("footer.about.contact")}
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title={t("footer.followus.heading")}
                className="font-body"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="font-body">
                  {t("footer.followus.gitlab")}
                </Footer.Link>
                <Footer.Link href="#" className="font-body">
                  {t("footer.followus.facebook")}
                </Footer.Link>
                <Footer.Link href="#" className="font-body">
                  {t("footer.followus.linkin")}
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className=" w-full sm:flex sm:items-center sm:justify-center">
          <Footer.Copyright
            href="#"
            by={t("footer.copyright")}
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center"></div>
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter
