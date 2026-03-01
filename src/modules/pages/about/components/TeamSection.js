import CardMember from './CardMember';
import { useTranslation } from "react-i18next";
import panha from '../../../../_timouy/assets/images/team-pic/panha.png'
import rithy from '../../../../_timouy/assets/images/team-pic/rithy.JPG'
import piseth from '../../../../_timouy/assets/images/team-pic/piseth.JPG'
import longsan from '../../../../_timouy/assets/images/team-pic/san.png'



const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <div className="page about-page">
      <h3 className="text-center font-semibold text-2xl">
        {t("aboutus.team.heading")}
      </h3>
      <div className="page-wrapper lg:flex lg:justify-around lg:gap-5 md:grid md:grid-cols-2 md:gap-10 xs:page-wrapper small">
        <CardMember
          gitlab={'https://gitlab.com/Pisethsek'}
          fb={'https://www.facebook.com/profile.php?id=100050851093059'}
          image={piseth}
          name={t("aboutus.team.team1")}
          position="Backend Engineer"
        />
        <CardMember
          gitlab={'https://gitlab.com/p4nh4oo3'}
          fb={'https://www.facebook.com/Panha.03'}
          image={panha}
          name={t("aboutus.team.team2")}
          position="Frontend Engineer"
        />
        <CardMember
          fb={'https://www.facebook.com/longs4n'}
          gitlab={'https://gitlab.com/longs4n'}
          image={longsan}
          name={t("aboutus.team.team3")}
          position="Frontend Engineer"
        />
        <CardMember
          fb={'https://www.facebook.com/Rithyhen007'}
          gitlab={'https://gitlab.com/Sereyrithy99'}
          image={rithy}
          name={t("aboutus.team.team4")}
          position="Frontend Engineer"
        />
      </div>
    </div>
  );
}

export default TeamSection;
