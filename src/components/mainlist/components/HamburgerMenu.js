import React from "react";
import { HamburgerIcon } from "../../../assets/svg";

const HamburgerMenu = (props) => {
  const { openMobileMenu, setOpenMobileMenu } = props;

  const toggleMobile = () => setOpenMobileMenu((prevState) => !prevState);

  return (
    <div className={"hamburger-wrapper"} onClick={toggleMobile}>
      <HamburgerIcon />
      <p>{openMobileMenu ? "Hide filters" : "Show filters"}</p>
    </div>
  );
};

export default HamburgerMenu;
