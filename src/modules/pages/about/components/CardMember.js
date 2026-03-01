import teammate from '../../../../_timouy/assets/images/team-default.jpg'
import facebook from '../../../../_timouy/assets/images/facebook.png'
import linkin from '../../../../_timouy/assets/images/linkIn.png'
import ig from '../../../../_timouy/assets/images/ig.png'
import git from '../../../../_timouy/assets/images/gitlab.png'
const CardMember = ({ name, position, image, fb, gitlab }) => {
    return (
        <div className="card card-member xs:mb-4">
            <div className="flex items-center justify-center ">
                <img className="w-52 h-auto" src={image || teammate} alt="logo" />
            </div>
            <div className="context-member">
                <p className="lg:text-xl md:text-lg" id="name">
                    <b>{name}</b>
                </p>
                <p id="desc">{position}
                </p>
            </div>

            <div className="icon">
                <a href={fb} target="_blank" rel="noopener noreferrer">
                    <img className="w-8 h-8" src={facebook} alt="logo" />
                </a>
                {/* <img className="w-8 h-8" src={linkin} alt="logo" /> */}
                {/* <img className="w-8 h-8" src={ig} alt="logo" /> */}
                <a href={gitlab} target="_blank" rel="noopener noreferrer">
                    <img className="w-8 h-8" src={git} alt="logo" />
                </a>
            </div>
        </div>
    )
}

export default CardMember;