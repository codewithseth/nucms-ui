import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Footer } from "flowbite-react";
import logo from "../../../../../_timouy/assets/svg/logo.svg";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const FooterPage = () => {
  const currentYear = new Date().getFullYear();
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);

  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand src={logo} alt="logo" />
          <div className="flex gap-4">
            <h1>Follow Us On</h1>
            <div className="flex gap-4">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by={id ? user.username : "timouy"} year={currentYear} />
      </div>
    </Footer>
  );
};
