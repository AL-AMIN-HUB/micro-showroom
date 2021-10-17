import React, { useState } from "react";
import BannerImage from "../../../images/aboutImage.jpg";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInGoogle, handleUserLogin, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    handleUserLogin(email, password);
  };
  return (
    <div className=" container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input onChange={handleEmail} type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input onChange={handlePassword} type="password" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">
              {error}
            </label>
          </div>
          <div className="text-center mt-3">
            <button onClick={handleSubmit} className="btn btn-warning fs-5 me-3">
              Submit
            </button>
            <button onClick={signInGoogle} className="btn btn-outline-primary fs-5">
              Google Sign in
            </button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img className="img-fluid" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
