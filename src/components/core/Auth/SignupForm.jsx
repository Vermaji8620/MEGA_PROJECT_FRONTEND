import { useState } from "react";
import { toast } from "react-hot-toast";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { sendOtp } from "../../../services/operations/authAPI";
import { setSignupData } from "../../../slices/authSlice";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import Tab from "../../common/Tab";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleOnChange = (even) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    const signupData = {
      ...formData,
      accountType,
    };

    // setting signup data to state
    //  to be used aftre otp verification
    dispatch(setSignupData(signupData));
    // send otp to useer for verificatiion
    dispatch(sendOtp(formData.email, navigate));

    // reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setAccountType(ACCOUNT_TYPE.STUDENT);
  };

  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ];

  return (
    <div>
      {/* Tab */}
      <Tab tabData={tabData} field={accountType} setField={setAccountType} />
      <form
        onSubmit={handleOnSubmit}
        action=""
        className="flex w-full flex-col gap-y-4"
      >
        <div>
          <label htmlFor="">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              placeholder="enter the first name"
              className="w-full rounded-[0.5rem] bg-black p-[12px] text-black"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
        </div>
        <label className="w-full" htmlFor="">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] texr-black">
            Email Address <sup className="text-pink-200">* </sup>
          </p>
          <input
            type="email"
            required
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="enter email address"
            className="w-full rounded-[0.5rem] bg-black p-[12px] text-black"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
          />
        </label>
        <div className="flex gap-x-4">
          <label className="relative" htmlFor="">
            <p className="mb-1 text-[0.875rem] loading-[1.375rem] text-black">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="enter password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-black p-[12px] pr-10 text-black"
            />
            <span
              onClick={() => setshowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label htmlFor="" className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />

            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-200 py-[8px] px-[12px] font-medium  text-black"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
