import React from "react";
import "./Login.css";
import signUp  from "../../../../assets/signUp.png";
import { useRecoilState, useSetRecoilState } from "recoil";
import authScreenAtom from "../../../atoms/authAtom";
import { useState } from "react";
import userAtom from "../../../atoms/userAtom";
import { prevPathAtom } from "../../../atoms/prevPathAtom";
import useShowToast from "../../../hooks/useShowToast";
import { useAxiosInstance } from "../../../../api/axios";
import tokenAtom from "../../../atoms/tokenAtom";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const setAuthScreen = useSetRecoilState(authScreenAtom);

  const setUser = useSetRecoilState(userAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [prevPath, setPrevPath] = useRecoilState(prevPathAtom);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useRecoilState(tokenAtom);
  const axiosInstance = useAxiosInstance();
  const showToast = useShowToast();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/auth/signin",
        JSON.stringify({ email, password })
      );
      console.log(response.data.loggedInUser);
      const loggedUser = response.data.loggedInUser;
      const token = response.data.token;

      localStorage.setItem("user-payGifty", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);

      setToken(token);
      setUser(loggedUser);

      const localStoragePrevPath = localStorage?.getItem("localPrevPath");

      if (localStoragePrevPath) {
        localStorage.removeItem("localPrevPath");
        navigate(localStoragePrevPath);
      } else if (prevPath) {
        setPrevPath(null);
        navigate(prevPath);
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      if (error?.response?.status === 404) {
        showToast(
          "Error",
          "This user registered with Google authentication, continue with google and create password",
          "error"
        );
      }
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="logCon">
      <div className="inputCon">
        <h2>Giftify</h2>
        <div className="inputBox">
          <div className="logText">
            <p>Welcome back !!!</p>
            <h3>Sign in</h3>
          </div>
          <div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="formColumn">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  placeholder="testing@gmail.com"
                  required
                />
              </div>
              <div className="formColumn">
                <label htmlFor="password">Password:</label>
                <input
                  placeholder="********"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Authenticating..." : "Sign In"}
              </button>
            </form>
          </div>

          <div className="logIn">
            <p>
              Don&apos;t have an account? <Link to='/signup'>Sign up</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="logImg">
        <img src={signUp} alt="cartImg" className="logPic" />
      </div>
    </div>
  );
};

export default Login;
