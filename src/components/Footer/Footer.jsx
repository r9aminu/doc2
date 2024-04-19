import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer
      id="contact"
      className="footer"
      style={{ backgroundImage: 'url("/images/footer-bg.png")' }}
    >
      <div className="container">
        <div className="section footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img
                src="/images/logo.svg"
                width={136}
                height={46}
                loading="lazy"
                alt="Doclab home"
              />
            </a>
            <ul className="contact-list has-after">
              <li className="contact-item">
                <div className="item-icon">
                  <ion-icon name="mail-open-outline" />
                </div>
                <div>
                  <p>
                    Main Email :{" "}
                    <a href="mailto:contact@website.com" className="contact-link">
                      contact@­website.com
                    </a>
                  </p>
                  <p>
                    Inquiries :{" "}
                    <a href="mailto:Info@mail.com" className="contact-link">
                      Info@mail.com
                    </a>
                  </p>
                </div>
              </li>
              <li className="contact-item">
                <div className="item-icon">
                  <ion-icon name="call-outline" />
                </div>
                <div>
                  <p>
                    Office Telephone :{" "}
                    <a href="tel:0029129102320" className="contact-link">
                      0029129102320
                    </a>
                  </p>
                  <p>
                    Mobile :{" "}
                    <a href="tel:000232439493" className="contact-link">
                      000 2324 39493
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-wrapper">
            <div className="footer-list">
              <p className="headline-sm footer-list-title">About Us</p>
              <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
              <address className="address">
                <ion-icon name="map-outline" />
                <span className="text">
                  2416 Mapleview Drive <br />
                  Tampa, FL 33634
                </span>
              </address>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text copyright" style={{ display: "flex", gap: "10px" }}>
            © Doclab {new Date().getFullYear()} | All Rights Reserved.
            <Link to="/privacy-policy">Privacy Policy</Link> <span>|</span>{" "}
            <Link to="/terms-and-conditions">Terms of Use</Link>
          </p>
          <ul className="social-list">
            <li>
              <a href="https://www.facebook.com" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.google.com" className="social-link">
                <ion-icon name="logo-google" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" className="social-link">
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com" className="social-link">
                <ion-icon name="logo-pinterest" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
