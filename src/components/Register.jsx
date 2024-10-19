import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    if (!username) {
      alert("Username cannot be empty");
      isValid = false;
    } else if (/^[0-9]+$/.test(username)) {
      alert("Username cannot be only numbers");
      isValid = false;
    }

    if (!email) {
      alert("Email cannot be empty");
      isValid = false;
    }

    if (!password) {
      alert("Password cannot be empty");
      isValid = false;
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      isValid = false;
    }

    if (isValid) {
      navigate("/login");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="container pt-5 pb-5 text-center">
          <h1>Register</h1>
          <div className="log-in d-flex flex-column align-items-center justify-content-center">
            <div className="input-group mb-4 mt-4">
              <span className="input-group-text" id="addon-wrapping">
                Username
              </span>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                aria-label="Username"
              />
            </div>
            <div className="input-group mb-4">
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
            Have an account?{" "}
            <span>
              <Link to="/login" className="register">
                Login
              </Link>
            </span>
          </p>
          <button type="submit" className="mb-4">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
