import "./aboutUs.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AboutUsHeaderFeature = (props: any) => {
  const { description, icon } = props;
  return (
    <div className="feature">
      <div className="feature_icon_main">
        <i className={`fa-solid fa-${icon} feature_icon`}></i>
      </div>
      <div className="feature_description">{description}</div>
    </div>
  );
};

export default AboutUsHeaderFeature;
