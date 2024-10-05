import "./navbar.css";
import { useNavigate } from "react-router-dom";
import BtnEmptyBorder from "../Common/BtnEmptyBorder";
import { useState } from "react";
class Paths {
  HOME!: string;
  CONTACT_US!: string;
  ABOUT_US!: string;

  public constructor(init?: Partial<Paths>) {
    Object.assign(this, init);
  }
}
const Navbar = () => {
  const paths: Paths = {
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
        <div
          className={`center_btn ${
            selectedPath === paths.HOME ? "highlight" : ""
          }`}
          onClick={() => goTo(paths.HOME)}
        >
          Home
        </div>
        <div
          className={`center_btn ${
            selectedPath === paths.CONTACT_US ? "highlight" : ""
          }`}
          onClick={() => goTo(paths.CONTACT_US)}
        >
          Contact
        </div>
        <div
          className={`center_btn ${
            selectedPath === paths.ABOUT_US ? "highlight" : ""
          }`}
          onClick={() => goTo(paths.ABOUT_US)}
        >
          About Us
        </div>
      </div>
      <BtnEmptyBorder title={"Sign Up"} />
    </div>
  );
};

export default Navbar;
