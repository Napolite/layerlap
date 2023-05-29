import "./contact.css";

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
            <img />
            <div></div>
          </div>
          <div className="contact-info">
            <img />
            <div></div>
          </div>
          <div className="contact-info">
            <img />
            <div></div>
          </div>

          <div className="contact-info-footer">
            <img />
            <img />
            <img />
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
