import "./common.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BtnFilledWhite = (props: any) => {
  const { title, onClick } = props;
  return (
    <button className="btn_filled_white" onClick={onClick}>
      {title}
    </button>
  );
};

export default BtnFilledWhite;
