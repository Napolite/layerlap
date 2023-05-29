import "./contact.css";
import {
  phone,
  email,
  position,
  twitterblack,
  instagrabBlack,
  discord,
} from "../../assets";

function Contact() {
  return (
    <div className="contact-root">
      <div className="contact-header">Contact Us</div>
      <div className="contact-sub-header">
        Bring your Project to Life with LAYERLAB
      </div>
      <div className="contact">
        <div className="contact-left-panel">
          <div className="contact-left-panel-info">Contact Information</div>
          <div className="contact-live">
            Say something to start the livechat
          </div>
          <div className="contact-info">
            <img src={phone} />
            <div>+234 90030033090</div>
          </div>
          <div className="contact-info">
            <img src={email} />
            <div>layerlab@gmail.com</div>
          </div>
          <div className="contact-info">
            <img src={position} />
            <div> Nigeria</div>
          </div>

          <div className="contact-info-footer">
            <img src={twitterblack} />
            <img src={instagrabBlack} />
            <img src={discord} />
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" name="First" id="" />
            <input type="text" name="Last" id="" />
            <input type="text" name="email" id="" />
            <input type="text" name="company" id="" />
            <input type="text" name="message" id="" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
