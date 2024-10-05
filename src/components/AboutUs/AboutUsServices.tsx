import BtnFilled from "../Common/BtnFilled";
import "./aboutUs.css";
import AboutUsServiceCard from "./AboutUsServiceCard";
import AboutUsServicePointer from "./AboutUsServicePointer";

const AboutUsServices = () => {
  return (
    <div className="about_us_services">
      <div className="services">
        <div className="service_description">
          <div className="service_heading">Our Services</div>
          <div className="service_pointers">
            <AboutUsServicePointer
              point={"Features and Additional Resources"}
            />
            <AboutUsServicePointer
              point={"Confidential And Anonymous Sharing"}
            />
            <AboutUsServicePointer point={"Secure NGO Login Portal"} />
          </div>
          <BtnFilled title={"See More"} />
        </div>
        <div className="service_cards">
          <AboutUsServiceCard
            heading={"Service Details"}
            description={"Discover our extensive range of services."}
            icon={"gear"}
          />
          <AboutUsServiceCard
            heading={"User Anonymity"}
            description={"Share needs anonymously for help."}
            icon={"user-secret"}
          />
          <AboutUsServiceCard
            heading={"Donations Portal"}
            description={"A comprehensive donation portal."}
            icon={"hand-holding-dollar"}
          />
          <AboutUsServiceCard
            heading={"Real-Time Sharing"}
            description={"Real-time data sharing options."}
            icon={"location-arrow"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsServices;
