import React from "react";
import { Icon } from "src/components/Icons/Icon";
import FooterSubscribeForm from "src/components/Form/FooterSubscribeForm/FooterSubscribeForm";
import "./Footer.css";

const Footer = () => {
  const footerList1 = ["About Us", "Blog", "Contact", "FAQ"];
  const footerList2 = [
    "Disclaimer",
    "Financing",
    "Privacy Policy",
    "Terms of Service",
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer logo */}
        <div className="footer__logo">
          <a href="#">
            <Icon name="logo" />
          </a>
        </div>
        {/* Footer list left */}
        <ul className="footer__list__left">
          {footerList1.map((item) => (
            <li>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        {/* Footer list right */}
        <ul className="footer__list__right">
          {footerList2.map((item) => (
            <li>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        {/* Footer subscribe form */}
        <FooterSubscribeForm />
      </div>
    </footer>
  );
};

export default Footer;
