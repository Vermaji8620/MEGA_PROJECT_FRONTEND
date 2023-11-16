import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { logout } from "../../../services/operations/authAPI";

const ProfileDropDown = () => {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  if (!user) return null;

  return (
    <button
      className="relative"
      onClick={() => {
        setOpen(true);
      }}
    >
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-30px rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-sm text-black-100" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%]right-0 z-[1000] divide-y-[1px] divide-black overflow-hidden rounded-md border-[1px] border-black bg-black"
          ref={ref}
        >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-gray-700 hover:bg-black hover:text-black">
              <VscDashboard className="text-lg" />
              DashBoard
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate));
              setOpen(false);
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-gray-700 hover:bg-gray-900 hover:text-black"
          >
            <VscSignOut className="text-lg" /> LogOut
          </div>
        </div>
      )}
    </button>
  );
};

export default ProfileDropDown;
