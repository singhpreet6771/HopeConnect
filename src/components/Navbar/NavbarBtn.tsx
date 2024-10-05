import "./navbar.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavbarBtn = (props: any) => {
  const { selectedPath, path, title, goTo } = props;
  const className =
    selectedPath === path ? "center_btn highlight" : "center_btn";
  return (
    <div className={className} onClick={() => goTo(path)}>
      {title}
    </div>
  );
};

export default NavbarBtn;
