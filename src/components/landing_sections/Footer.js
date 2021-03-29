import React from "react";
import * as footerStyles from "../../scss/footer.module.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <FaFacebook className={footerStyles.icon} />
      <FaTwitter className={footerStyles.icon} />
      <FaInstagram className={footerStyles.icon} />
    </div>
  );
};

export default Footer;
