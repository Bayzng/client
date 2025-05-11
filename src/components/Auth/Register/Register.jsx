import React, { useState } from "react";
import signUp from "../../../../assets/signUp.png";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useAxiosInstance } from "../../../../api/axios";
import useShowToast from "../../../hooks/useShowToast";
import userAtom from "../../../atoms/userAtom";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const setUser = useSetRecoilState(userAtom);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const showToast = useShowToast();
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxiosInstance();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return showToast("Error", "password does not correspond", "error");
    }
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        "/auth/signup",
        JSON.stringify({ name, email, password, confirmPassword })
      );
   
      const data = response.data;

      if (data.message) {
        showToast("Success", data.message, "success");
      }

      navigate("/confirm-email");
    } catch (error) {
      console.log(error);
      showToast("Error", error.response.data.error, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Register">
      <div className="--Register-Flex">
        <div className="--Register-Box">
          <div>
            <h2>Giftify</h2>
            <h1>Sign UP</h1>
          </div>
          <div className="--Register-Form">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label> <br />
              <input
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />{" "}
              <br />
              <label htmlFor="email">Name</label> <br />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                value={name}
                required
              />{" "}
              <br />
              <label htmlFor="email">Password</label> <br />
              <input
                type="password"
                placeholder="Your Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />{" "}
              <br />
              <label htmlFor="email">Confirm Password</label> <br />
              <input
                type="password"
                placeholder="Confirm Your Password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />{" "}
              <br />
              <button type="submit" disabled={loading}>
                {loading ? "Signing you up..." : "Sign Up"}
              </button>
              <p>
                Have An Account:{" "}
                <Link style={{ color: "#f4803a" }} to="/auth">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="Footer-Image">
          <img src={signUp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
