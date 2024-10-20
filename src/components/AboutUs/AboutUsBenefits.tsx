import BtnEmpty from "../Common/BtnEmpty";
import "./aboutUs.css";
import AboutUsBenefitsCard from "./AboutUsBenefitsCard";

const AboutUsBenefits = () => {
  return (
    <div className="about_us_benefits">
      <div className="benefits_heading">Key Benefits</div>
      <div className="benefits_cards">
        <AboutUsBenefitsCard
          icon={"gear"}
          heading={"Real-Time"}
          description={"Efficiently connect with local NGOs."}
        />
        <AboutUsBenefitsCard
          icon={"lightbulb"}
          heading={"Confidential Sharing"}
          description={"Easily share your needs securely."}
        />
        <AboutUsBenefitsCard
          icon={"circle-check"}
          heading={"Stay Anonymous "}
          description={"Ensures user privacy and support."}
        />
        <AboutUsBenefitsCard
          icon={"rocket"}
          heading={"Public Requests"}
          description={"Request help publicly with ease."}
        />
      </div>
      <div className="benefits_connections">
        <div className="benefits_connections_overview">
          <div className="benefits_connections_heading">
            Connecting People and NGOs Securely.
          </div>
          <div className="benefits_connections_description">
            HopeConnect bridges communities and NGOs for impactful change.
          </div>
          <BtnEmpty title={"Learn More"} />
        </div>
        <div className="benefits_connections_logos">
          <div className="connection_logo">Logo 1</div>
          <div className="connection_logo">Logo 2</div>
          <div className="connection_logo">Logo 3</div>
          <div className="connection_logo">Logo 4</div>
          <div className="connection_logo">Logo 5</div>
          <div className="connection_logo">Logo 6</div>
          <div className="connection_logo">Logo 7</div>
          <div className="connection_logo">Logo 8</div>
          <div className="connection_logo">Logo 9</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBenefits;
