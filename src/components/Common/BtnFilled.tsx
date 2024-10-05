import "./common.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BtnFilled = (props: any) => {
  const { title } = props;
  return <button className="btn_filled">{title}</button>;
};

export default BtnFilled;
