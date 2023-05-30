import "./footer.css";
import { fbwhite, instagram, logowhite, twitterwhite } from "../../assets";

function Footer() {
  return (
    <div className="footer-root">
      <div className="footer-logo">
        <img src={logowhite} />
        <div>LayerLab</div>
      </div>
      <div className="footer-note">
        We deliver professional software development services for businesses and
        projects.
      </div>
      <div className="footer-services">
        <div>Solutions</div>
        <div>Service</div>
        <div>Contact</div>
      </div>
      <div className="footer-images">
        <img src={fbwhite} />
        <img src={twitterwhite} />
        <img src={instagram} />
      </div>
    </div>
  );
}

export default Footer;
