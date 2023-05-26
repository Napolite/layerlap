import "./navbar.css";
import { layerLap } from "../../assets";

function Navbar() {
  return (
    <div className="navbar-root">
      <div>
        <img src={layerLap} />
      </div>
      <div>
        <div>Home</div>
        <div>Services</div>
        <div>Solutions</div>
        <div>Contacts</div>
      </div>
      <div>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Navbar;
