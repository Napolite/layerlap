import "./services.css";
import {
  blockchain,
  cyber,
  consult,
  design,
  webdev,
  education,
  enterprise,
  marketing,
} from "../../assets";
function Services() {
  return (
    <div className="services-root">
      <div className="services-intro">
        <div>What We Do</div>
        <div>
          LAYERLAB is a global blockchain technology company providing solutions
          for developers, startups, enterprises, and governments.
        </div>
      </div>
      <div className="services">
        <div>
          <img src={blockchain} />
          <div>Blockchain Development</div>
          <div>
            We develop blockchain and smart contracts solutions for
            organizations of all sizes. We have experience working with Bitcoin,
            Ethereum, Cardano, Quorum, Hyperledger Fabric, among others.
          </div>
        </div>
        <div>
          <img src={enterprise} />
          <div>Enterprise Development</div>
          <div>
            We build enterprise-level solutions that utilize advanced
            technologies in Blockchain, IoT, AI data analysis and more.
          </div>
        </div>
        <div>
          <img src={education} />
          <div>Education</div>
          <div>
            We foster an online & offline community through the creation and
            delivery of curricula for developers & career professionals, where
            they can learn to build on top of blockchain platforms and enhance
            career opportunities.
          </div>
        </div>
      </div>
      <div className="services">
        <div>
          <img src={webdev} />
          <div>Web Development</div>
          <div>
            We provide end-to-end web and mobile app development according to
            our client’s needs and specifications. Our experience includes UI/UX
            design and full-stack web development, which includes Rust, Haskell,
            Javascript (ES6), Java, React, React-Native, Swift, Objective-C,
            etc.
          </div>
        </div>
        <div>
          <img src={consult} />
          <div>IT Consulting</div>
          <div>
            Our IT consultants are industry experts that help companies
            transform, implement and maintain network infrastructure
          </div>
        </div>
        <div>
          <img src={design} />
          <div>Design & UI/UX</div>
          <div>
            We gather information about your product and industry you work in to
            integrate your vision into the user experience. Ensuring to deliver
            the right business value we follow the product cycle from ideation
            to creation user experience conducted through the visual design.
          </div>
        </div>
      </div>
      <div className="services">
        <div>
          <img src={marketing} />
          <div>Digital Marketing</div>
          <div>
            we offer results-driven online marketing services tailored to the
            needs of clients. We leverage our network of leading industry
            partners to increase conversion rates, website traffic, and overall
            online visibility to help meet our clients’ goals.
          </div>
        </div>
        <div>
          <img src={cyber} />
          <div>Cyber Security</div>
          <div>
            protecting computer systems, networks, and sensitive information
            from theft, damage, or unauthorized access.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
