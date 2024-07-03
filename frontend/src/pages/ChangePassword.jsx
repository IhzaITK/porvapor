import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/changepassword.css";
import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <div className="change-section">
      <Header />

      <h1 className="header">Change Password</h1>
      <div className="change">
        <div className="sidebar_pro">
          <ul className="change-ul">
            <Link to="/profile">
              <a className="side-link">Account Details</a>
            </Link>
            <br />
            <Link to="/order">
              <a className="side-link">Orders</a>
            </Link>
            <br />
            <Link to="#">
              <a className="side-link">Change Password</a>
            </Link>
            <br />
            <Link to="/login">
              <a className="side-link">Log Out</a>
            </Link>
          </ul>
        </div>
        <div className="change">
          <form action="#">
            <div className="form-group">
              <label htmlFor="now" className="label">
                Password Now
              </label>
              <input type="password" id="passwordNow" name="passwordNow" className="input-change" required />
              <span className="password-eye">
                <i className="fas fa-eye"></i>
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="new" className="label">
                New Password
              </label>
              <input type="new-password" id="passwordNew" name="passwordNew" className="input-change" required />
              <span className="password-eye">
                <i className="fas fa-eye"></i>
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="confirm" className="label">
                Confirm New Password
              </label>
              <input type="new-password" id="passwordConfirm" name="passwordConfirm" className="input-change" required />
              <span className="password-eye">
                <i className="fas fa-eye"></i>
              </span>
            </div>

            <button type="submit" className="button">
              Save Changes
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ChangePassword;
