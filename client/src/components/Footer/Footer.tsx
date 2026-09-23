import styles from "./Footer.module.css";
import logo from "../../assets/footer-logo.png";
import iconMail from "../../assets/mail.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerAbout}>
            <h2 className={styles.footerAboutTitle}>About</h2>
            <p className={styles.footerAboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className={styles.footerAboutEmail}>
              <strong>Email :</strong> info@jstemplate.net
            </p>
            <p className={styles.footerAboutPhone}>
              <strong>Phone :</strong> 880 123 456 789
            </p>
          </div>
          <ul className={styles.footerLinks}>
            <h2 className={styles.footerLinksTitle}>Quick Link</h2>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className={styles.footerCategory}>
            <h2 className={styles.footerCategoryTitle}>Category</h2>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Economy</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
          </ul>
          <div className={styles.footerSubscribe}>
            <h2 className={styles.footerSubscribeTitle}>Weekly Newsletter</h2>
            <p className={styles.footerSubscribeSubtitle}>
              Get blog articles and offers via email
            </p>
            <div className={styles.footerSubscribeInput}>
              <img src={iconMail} alt="icon" />
              <input type="email" placeholder="Your Email" />
            </div>
            <button>Subscribe</button>
          </div>
        </div>
        <div className={styles.footerLicence}>
          <div className={styles.footerLogo}>
            <img src={logo} alt="" />
            <div className={styles.footerLogoText}>
              <h3>
                Meta<strong>Blog</strong>
              </h3>
              <p>© JS Template 2023. All Rights Reserved.</p>
            </div>
          </div>
          <ul className={styles.footerPolicy}>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
