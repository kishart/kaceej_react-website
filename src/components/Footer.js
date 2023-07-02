import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon /> <InstagramIcon /> <TwitterIcon /> <EmailIcon />
      </div>
      <p> &copy; 2023 kaceej.com</p>
    </div>
  );
}

export default Footer;
