import "./Auth.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginService } from "../../Services";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });

  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  const setUserChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginClickHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await loginService(user);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        authDispatch({
          type: "LOGIN",
          payload: {
            user: response.data.foundUser,
            token: response.data.encodedToken,
          },
        });
        setUser({ email: "", password: "" });
        navigate("/");
      } else if (response.status === 401) {
        throw new Error("wrong password");
      } else if (response.status === 404) {
        throw new Error("user not found");
      } else if (response.status === 500) {
        throw new Error("internal server error");
      }
    } catch (error) {
      alert(error);
    }
  };

  const guestbtnClickHandler = (e) => {
    e.preventDefault();
    setUser(guestUser);
  };

  return (
    <div className="auth-container">
      <section className="auth-card">
        <h2 className="auth-title">Login</h2>
        <form className="auth-main">
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="test@gmail.com"
              value={user.email}
              onChange={setUserChangeHandler}
              className="input"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input"
              value={user.password}
              onChange={setUserChangeHandler}
              name="password"
              required
            />
          </div>
          <div className="box-link-wrapper">
            <div className="checkbox">
              <input id="remember-me" name="remember-me" type="checkbox" />
              <label htmlFor="remember-me">Remember-me</label>
            </div>

            <div className="forgot-link">
              <a href="#">Forgot Your Password?</a>
            </div>
          </div>
          <button
            className="btn btn-primary auth-btn"
            onClick={loginClickHandler}
          >
            Login
          </button>
          <button
            className="btn btn-primary guest-btn"
            onClick={guestbtnClickHandler}
          >
            Guest Credentials
          </button>
          <div className="auth-link-wrapper">
            <Link to="/signup">Create New Account</Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export { Login };
