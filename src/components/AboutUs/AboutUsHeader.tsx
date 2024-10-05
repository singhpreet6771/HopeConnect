import "./aboutUs.css";
import mainBgImage from "../../assets/main-picture.jpg";
import bgImage1 from "../../assets/background-image-1.png";
import bgImage2 from "../../assets/background-image-2.png";
import bgImage3 from "../../assets/background-image-3.png";
import bgImage4 from "../../assets/background-image-4.png";
import BtnFilled from "../Common/BtnFilled";
import BtnEmpty from "../Common/BtnEmpty";
import AboutUsHeaderFeature from "./AboutUsHeaderFeature";

const AboutUsHeader = () => {
  return (
    <div className="aboutUs">
      <div className="about_us_image">
        <div className="images">
          <div className="main_background">
            <img id="mainBgImage" src={mainBgImage} alt="" />
          </div>
          <img id="bgImage1" src={bgImage1} alt="" />
          <img id="bgImage2" src={bgImage2} alt="" />
          <img id="bgImage3" src={bgImage3} alt="" />
          <img id="bgImage4" src={bgImage4} alt="" />
        </div>
      </div>
      <div className="about_us_info">
        <div className="about_us_heading">
          Empowering Unity: Building Stronger Communities with HopeConnect
        </div>
        <div className="about_us_features">
          <AboutUsHeaderFeature
            description={"Seamless Real-Time Sharing"}
            icon={"lightbulb"}
          />
          <AboutUsHeaderFeature
            description={"Your Identity Stays Confidential"}
            icon={"rocket"}
          />
          <AboutUsHeaderFeature
            description={"Public Help Request Feed"}
            icon={"circle-check"}
          />
        </div>
        <div className="about_us_join_btns">
          <BtnFilled title={"Get Started"} />
          <BtnEmpty title={"Join Now"} />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeader;
