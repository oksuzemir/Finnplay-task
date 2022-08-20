import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CancelIcon, FinnplayLogo, PasswordEye } from "../../assets/svg";
import * as ROUTES from "../../configs/RouterConfig";
import { LOGIN_INFO_UPDATE } from "../../store/actionsName";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setVisible = () => setPasswordVisible((prevState) => !prevState);

  const updateUsername = (e) => setUsername(e.target.value);

  const updatePassword = (e) => setPassword(e.target.value);

  const submitLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    if (username === "finnplay" && password === "finnplaytask") {
      setTimeout(() => {
        setLoading(false);
        navigate(ROUTES.MAIN);
      }, 2000);
      dispatch({ type: LOGIN_INFO_UPDATE, payload: { username: "finnplay" } });
    } else {
      setLoading(false);
      setLoginError(true);
      setTimeout(() => {
        setLoginError(false);
      }, 3000);
    }
  };

  return (
    <div className={"login-container"}>
      <FinnplayLogo />
      <div>
        <form onSubmit={submitLogin}>
          <div className="form-group">
            <input
              type="text"
              name="login"
              value={username}
              onChange={updateUsername}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="login">Login</label>
          </div>
          <div className="form-group">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={password}
              onChange={updatePassword}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="password">Password</label>
            <div className={"password-eye"} onClick={setVisible}>
              {passwordVisible && <div className={"revert-slash"}>\</div>}
              <PasswordEye />
            </div>
          </div>
          <button type={"submit"}>
            {loading ? (
              <div className="spinner">
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
              </div>
            ) : (
              <>Login</>
            )}
          </button>
        </form>
      </div>
      <div className={loginError ? "toast active" : "toast"}>
        <div className="toast-content">
          <CancelIcon />
          <div className="message">
            <span className="text text-1">Login failed</span>
            <span className="text text-2">Wrong username or password</span>
          </div>
        </div>
        <div className="progress active"></div>
      </div>
    </div>
  );
};

export default Login;
