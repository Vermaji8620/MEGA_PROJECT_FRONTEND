import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiDownArrowAlt } from "react-icons/bi";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { useEffect, useState } from "react";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";

const Navbar = () => {
  const location = useLocation();

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const subLinks = [
    {
      title: "python",
      link: "/catalog/python",
    },
    {
      title: "web dev",
      link: "/catalog/web-development",
    },
  ];

  // const [subLinks, setSubLinks] = useState([]);

  // const fetchSublinks = async () => {
  //   try {
  //     const result = await apiConnector("GET", categories.CATEGORIES_API);
  //     console.log("Printing the result --> ", result);
  //     setSubLinks(result.data.data);
  //   } catch (error) {
  //     console.log("could not fetch the category list");
  //   }
  // };

  // useEffect(() => {
  //   fetchSublinks();
  // }, []);

  return (
    <div className="">
      <div className="text-white border border-dotted w-11/12 flex justify-between mx-auto">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <nav className="flex items-center">
          <ul className="flex gap-x-6">
            {NavbarLinks.map((link, index) => {
              return (
                <div key={index}>
                  <li>
                    {link.title === "Catalog" ? (
                      <div className="flex items-center relative gap-2 justify-center group">
                        <p>{link.title}</p>
                        <BiDownArrowAlt />

                        <div className="invisible absolute left-[50%] border border-red-700 translate-x-[-50%] translate-y-[80%] top-[50%] flex flex-col rounded-md bg-white text-black transition-all group-hover:visible duration-200  w-[300px]">
                          <div className="absolute left-[50%] translate-x-[80%] border border-blue-800 translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-white"></div>

                          {subLinks.length ? (
                            <div>
                              {subLinks.map((subLink, index) => {
                                return (
                                  <div key={index}>
                                    <Link to={subLink.link}>
                                      {subLink.title}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
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
