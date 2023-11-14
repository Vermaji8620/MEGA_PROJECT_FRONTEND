import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tab from "../../common/Tab";
import toast from "react-hot-toast";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   const [accountType, setAccountType] = useState()

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
    if (password != password) {
      toast.error("Password do not match");
      return;
    }
    const SignupData = {
      ...formData,
      accountType,
    };

    // reset

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const tabData = [
    {
      id: 1,
      tabName: "Student",
      // type:
    },
    {
      id: 2,
      tabName: "Instructor",
      // type:
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
        <div>
          <label htmlFor=""></label>
          <label htmlFor=""></label>
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
