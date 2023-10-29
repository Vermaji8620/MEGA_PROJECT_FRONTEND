import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";

const Navbar = () => {
  const location = useLocation();
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

        <div className="border flex gap-4 items-center justify-center border-red-500">
                
        </div>
      </div>
    </div>
  );
};

export default Navbar;
