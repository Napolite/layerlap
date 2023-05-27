import { logo } from "../../assets";
import "./landing.css";

function Landing() {
  return (
    <div className="landing-root">
      <div className="landing-left">
        <div className="landing-circle"></div>
        <div className="landing-statement">
          <div>Solid Expertise In Development</div>
          <div>
            We deliver professional software development services for businesses
            and projects.
          </div>
        </div>
      </div>
      <div>
        <img src={logo} className="landing-logo" />
      </div>
    </div>
  );
}

export default Landing;
