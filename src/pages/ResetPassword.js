import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <div>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">Enter your new password</p>
              <form action="" className="d-flex flex-column gap-30">
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                </div>
                <div className="d-flex flex-column mt-3 justify-content-center align-items-center gap-15">
                  <button className="button border-0" type="submit">
                    Reset
                  </button>
                  <Link to="/login" className="">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
