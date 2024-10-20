import "./aboutUs.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AboutUsBenefitsCard = (props: any) => {
  const { icon, heading, description } = props;
  return (
    <div className="benefits_card">
      <i className={`fa-solid fa-${icon} feature_icon`}></i>
      <div className="card_benefits_heading">{heading}</div>
      <div className="card_benefits_description">{description}</div>
    </div>
  );
};

export default AboutUsBenefitsCard;
