import "./aboutUs.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AboutUsServicePointer = (props: any) => {
  const { point } = props;
  return (
    <div className="service_pointer">
      <i className="fa-solid fa-arrow-right"></i>
      <span className="service_text">{point}</span>
    </div>
  );
};

export default AboutUsServicePointer;
