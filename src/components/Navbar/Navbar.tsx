import "./navbar.css";
import { useNavigate } from "react-router-dom";
import BtnEmptyBorder from "../Common/BtnEmptyBorder";
import { useState } from "react";
import NavbarBtn from "./NavbarBtn";
class Path {
  HOME!: string;
  CONTACT_US!: string;
  ABOUT_US!: string;

  public constructor(init?: Partial<Path>) {
    Object.assign(this, init);
  }
}
const Navbar = () => {
  const path: Path = {
    HOME: "/",
    CONTACT_US: "/contactUs",
    ABOUT_US: "/aboutUs",
  };
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState("/");
  const goTo = (path: string): void => {
    setSelectedPath(path);
    navigate(path);
  };
  return (
    <div className="navbar">
      <div className="navbar_left_heading">HopeConnect</div>
      <div className="navabr_center_buttons">
        <NavbarBtn
          selectedPath={selectedPath}
          path={path.HOME}
          title={"Home"}
          goTo={goTo}
        />
        <NavbarBtn
          selectedPath={selectedPath}
          path={path.CONTACT_US}
          title={"Contact"}
          goTo={goTo}
        />
        <NavbarBtn
          selectedPath={selectedPath}
          path={path.ABOUT_US}
          title={"About Us"}
          goTo={goTo}
        />
      </div>
      <BtnEmptyBorder title={"Sign Up"} />
    </div>
  );
};

export default Navbar;
