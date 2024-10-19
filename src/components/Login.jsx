import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    if (!email) {
      alert("Email cannot be empty");
      isValid = false;
    }

    if (!password) {
      alert("Password cannot be empty");
      isValid = false;
    }

    if (isValid) {
      navigate("/login/dashboard");
    }
  };

  return (
    <div className="login pt-5 pb-5">
      <form onSubmit={handleSubmit}>
        <div className="container pt-5 pb-5 text-center">
          <h1>Login</h1>
          <div className="log-in d-flex flex-column align-items-center justify-content-center">
            <div className="input-group mb-4 mt-4">
              <span className="input-group-text" id="addon-wrapping">
                Email
              </span>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                aria-label="Email"
              />
            </div>
            <div className="input-group mb-4">
              <span className="input-group-text" id="addon-wrapping">
                Password
              </span>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                aria-label="Password"
              />
            </div>
          </div>
          <p className="mb-4 mt-3">
            Don't have an account?
            <span>
              {" "}
              <Link to="/register" className="register">
                Register
              </Link>
            </span>
          </p>
          <button type="submit" className="mb-4">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
