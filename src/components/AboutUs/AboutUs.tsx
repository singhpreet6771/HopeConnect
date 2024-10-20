import "./aboutUs.css";
import AboutUsBenefits from "./AboutUsBenefits";
import AboutUsHeader from "./AboutUsHeader";
import AboutUsServices from "./AboutUsServices";

const AboutUs = () => {
  return (
    <div className="about_us_main">
      <AboutUsHeader />
      <AboutUsServices />
      <AboutUsBenefits />
    </div>
  );
};

export default AboutUs;
