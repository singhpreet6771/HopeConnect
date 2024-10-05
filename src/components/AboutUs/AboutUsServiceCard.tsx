import "./aboutUs.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AboutUsServiceCard = (props: any) => {
  const { heading, description, icon } = props;
  return (
    <div className="service_card">
      <i className={`fa-solid fa-${icon} feature_icon`}></i>
      <div className="card_service_heading">{heading}</div>
      <div className="card_service_description">{description}</div>
    </div>
  );
};

export default AboutUsServiceCard;
