import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleonChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleonSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <form
      onSubmit={handleonSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      <label className="w-full">
        <p className="mb-1 text[0.875rem] leading-[1.37rem] text-black">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          type="text"
          value={email}
          onChange={handleonChange}
          required
          placeholder="enter the email address"
          className="w-full rounded-[0.5rem] bg-black-800 p-[12px] text-black-5 "
          name="email"
        />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black-5">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleonChange}
          placeholder="enter your password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-black p-[12px] pr-12 text-black-5"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <div>
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            </div>
          ) : (
            <div>
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            </div>
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt- ml-auto max-w-max text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
      </label>
      <button className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-black">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
