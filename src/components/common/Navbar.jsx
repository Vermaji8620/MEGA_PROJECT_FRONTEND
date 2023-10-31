import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";

const Navbar = () => {
  const location = useLocation();

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  return (
    <div className="">
      <div className="text-white border border-dotted w-11/12 flex justify-between mx-auto">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <nav className="flex items-center">
          <ul className="flex  gap-x-6">
            {NavbarLinks.map((link, index) => {
              return (
                <div key={index}>
                  <li>
                    {link.title === "Catalog" ? (
                      <div>{}</div>
                    ) : (
                      <div
                        className={`${
                          location.pathname === link.path
                            ? "text-yellow-200"
                            : "text-white"
                        }`}
                      >
                        <Link to={link.path}>{link.title} </Link>
                      </div>
                    )}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>

        {/* login signup dashboard */}
        <div className="border flex gap-4 items-center justify-center border-red-500">
          {user && user.accountType != "Instructor" && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}

          {token === null && (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}

          {token === null && (
            <Link to="/signup">
              <button>Signup </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
