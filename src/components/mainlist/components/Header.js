import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as ROUTES from "../../../configs/RouterConfig";
import { FinnplayLogo, LoginIcon } from "../../../assets/svg";
import { LOGIN_INFO_UPDATE } from "../../../store/actionsName";

const Header = () => {
  const { login } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch({ type: LOGIN_INFO_UPDATE, payload: null });
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className={"header"}>
      <div className={"header-wrapper"}>
        <div className={"logo-wrapper"}>
          <FinnplayLogo />
        </div>
        <div className={"account-details"} onClick={logoutHandler}>
          <p>{login.username}</p>
          <div className={"flex signout"}>
            <LoginIcon />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
