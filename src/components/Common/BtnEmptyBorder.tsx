import "./common.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BtnEmptyBorder = (props: any) => {
  const { title } = props;
  return <button className="btn_empty_border">{title}</button>;
};

export default BtnEmptyBorder;
