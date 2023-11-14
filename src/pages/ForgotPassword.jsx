import React, { useState } from "react";
import { useSelector } from "react-redux";

const ForgotPassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <h1>{!emailSent ? "Reset Your Password" : "Check your email"}</h1>
          <p>
            {!emailSent
              ? "Have nofear! We will email you instructions to reset your password. If you dont have an access to your email, we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>

          <form action="">
            {!emailSent && (
              <label>
                <p>Email Address: </p>
                <input
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your email address"
                />
              </label>
            )}

            <button>{!emailSent ? "Reset password" : "Resend email"}</button>
          </form>

          <div>
            <Link to="/login">
              <p>Back to login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
