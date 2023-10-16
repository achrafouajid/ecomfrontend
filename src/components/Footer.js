import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="text-white mb-0">Subscribe to our Newletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email address..."
                  aria-label="Your Email address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact us</h4>
              <div>
                <address className="text-white fs-6">
                  {" "}
                  101,Bd Oum Rabii <br /> Hay Hassani <br /> Casablanca Maroc
                  20220
                </address>
                <a
                  href="tel: +212 678 901 654"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +212 678 901 654
                </a>
                <a
                  href="mailto: ElectroMAG@Gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  ElectroMAG@Gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="#" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a href="#" className="text-white">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a href="#" className="text-white">
                    <BsFacebook className="fs-4" />
                  </a>
                  <a href="#" className="text-white">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a href="#" className="text-white">
                    <BsGithub className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/terms-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/">
                  About us
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  FAQ
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/">
                  Lave Vaisselles
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Lave Linge
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Aspirateurs
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Autre Produtis
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by OUAJID Achraf
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
