import "./common.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BtnEmpty = (props: any) => {
  const { title } = props;
  return (
    <button className="btn_empty">
      <span className="btn_empty_text">{title}</span>
      <i className="fa-solid fa-arrow-right"></i>
    </button>
  );
};

export default BtnEmpty;
