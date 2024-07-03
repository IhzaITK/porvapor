import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/verificationage.css";

function VerificationAge() {
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (value.length <= 2 && /^\d*$/.test(value)) {
      setMonth(value);
    }
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    if (value.length <= 2 && /^\d*$/.test(value)) {
      setDate(value);
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    if (value.length <= 4 && /^\d*$/.test(value)) {
      setYear(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!month || !date || !year) {
      alert("Please enter a complete date of birth.");
      return;
    }

    // Calculate age based on the provided birth date
    const today = new Date();
    const birthDate = new Date(`${year}-${month}-${date}`);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      alert("You must be at least 18 years old to access this website.");
      window.location.href = "https://www.google.com";
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <section className="alert-section">
        <div className="title-alert">
          <p>
            WARNING: Vaping products contain nicotine, <span className="p-alert"> a highly addictive chemical. Health Indonesia Generation. </span>
          </p>
        </div>
        <div>
          <h1 className="age-alert">Age Verification</h1>
        </div>
        <div className="div-enter">
          <p className="enter-alert">
            Please enter your date of birth. <span className="alert-acces">You must be 18 years or older to access this website.</span>
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="form-alert">
            <input
              type="number"
              placeholder="MM"
              value={month}
              onChange={handleMonthChange}
              className="input-alert"
              required
            />
            <input
              type="number"
              placeholder="DD"
              value={date}
              onChange={handleDateChange}
              className="input-alert"
              required
            />
            <input
              type="number"
              placeholder="YEAR"
              value={year}
              onChange={handleYearChange}
              className="input-alert"
              required
            />
            <div>
              <button type="submit" className="enter-btn">ENTER</button>
              <button type="button" className="exit-btn" onClick={() => window.location.href = "https://www.google.com"}>EXIT</button>
            </div>
          </form>
        </div>
        <div>
          <p className="this-website">
            This website is intended for adults of legal smoking age only. <span className="all-order"> All orders placed on the website will be verified by Age </span>
            <span className="verification-at">Verification at time of delivery.</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default VerificationAge;
