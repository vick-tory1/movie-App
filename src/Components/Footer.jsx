import React from "react";
import "../css/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">

        {/* Latest Movie Updates Section */}
        <div className="footer-info">
          <h2>Latest Movie Updates</h2>
          <p>
            <a href="#">Wednesday, 14th May 2025</a><br />
            "Guardians of the Galaxy Vol. 4" trailer released! Check it out now.
          </p>
          <p>
            <a href="#">Tuesday, 13th May 2025</a><br />
            New release: "The Matrix Resurgence" premieres worldwide.
          </p>
          <p>
            <a href="#">Monday, 12th May 2025</a><br />
            Special offer: 20% off on movie rentals for all VIP members.
          </p>
        </div>

        {/* Connect With Us Section */}
        <div className="footer-info">
          <h2>Connect With Us</h2>
          <div className="social">
            <FaFacebookF className="social-icon" />
            <p>Facebook <br /> <a href="#">+50,000 Fans</a></p>
          </div>
          <div className="social">
            <FaTwitter className="social-icon" />
            <p>Twitter <br /> <a href="#">+40,000 Followers</a></p>
          </div>
          <div className="social">
            <FaInstagram className="social-icon" />
            <p>Instagram <br /> <a href="#">+60,000 Followers</a></p>
          </div>
        </div>

        {/* Support / Business Hours Section */}
        <div className="footer-info">
          <h2>Support Hours</h2>
          <ul>
            <li>Monday: <a href="#">9am - 6pm</a></li>
            <li>Tuesday: <a href="#">9am - 6pm</a></li>
            <li>Wednesday: <a href="#">9am - 6pm</a></li>
            <li>Thursday: <a href="#">9am - 6pm</a></li>
            <li>Friday: <a href="#">9am - 6pm</a></li>
            <li>Saturday: <a href="#">10am - 4pm</a></li>
            <li>Sunday: <a href="#">Closed</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-info">
          <h2>Contact Us</h2>
          <p><strong>Office Address:</strong><br />
            5 Movie Street, Entertainment District, Lagos State
          </p>
          <p><strong>Email:</strong><br />
            <a href="mailto:info@toryadamsmovies.com">info@toryadamsmovies.com</a>
          </p>
          <p><strong>Phone:</strong><br />+234 905 792 0012, +234 815 681 3973</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2025 | Special Thanks to my Alpha-Male Samuel Ekpe | Designed by <a href="#">Tory Adams Ekpe</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
