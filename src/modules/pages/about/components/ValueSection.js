import Card from './Card'
import card1 from '../../../../_timouy/assets/images/about-card1.png'
import card2 from '../../../../_timouy/assets/images/about-card2.png'
import card3 from '../../../../_timouy/assets/images/about-card3.png'
import card4 from '../../../../_timouy/assets/images/about-card4.png'
import { useTranslation } from "react-i18next";

const ValueSection = () => {
    const { t } = useTranslation();

    return (
      <div className="page about-page ">
        <div className="page-wrapper value-section xs:value-section none ">
          <h3 className="text-center font-semibold text-2xl mb-10">
            {t("aboutus.core.heading")}
          </h3>
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 md:gap-10 md:flex md:flex-col">
            <Card
              number="1."
              title={t("aboutus.core.heading1")}
              description={t("aboutus.core.desc1")}
              image={card1}
            />
            <Card
              number="2."
              title={t("aboutus.core.heading2")}
              description={t("aboutus.core.desc2")}
              image={card2}
            />
            <Card
              number="3."
              title={t("aboutus.core.heading3")}
              description={t("aboutus.core.desc3")}
              image={card3}
            />
            <Card
              number="4."
              title={t("aboutus.core.heading4")}
              description={t("aboutus.core.desc4")}
              image={card4}
            />
          </div>
        </div>
      </div>
    );
}

export default ValueSection;