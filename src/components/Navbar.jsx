import { useState, useEffect } from "react";
import { logo } from "../assets/";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    var lastScrollTop = 0;
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });

    return () => {
      window.removeEventListener("scroll", this);
    };
  }, []);

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.remove("dark");
  }
  document.documentElement.classList.remove("dark");

  return (
    <nav
      id="navbar"
      className="navbar z-100 bg-base-100 transition-all duration-500 ease-in-out shadow-lg px-6 md:px-24"
    >
      <div className="flex-1">
        <img src={logo} className="h-16" alt="Logo" />
      </div>
      <div className="flex-none md:hidden">
        <button className="btn btn-ghost btn-circle" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-5">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "text-primary" : ""}
            >
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className={location.pathname === "/About" ? "text-primary" : ""}
            >
              <b>About</b>
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className={location.pathname === "/Contact" ? "text-primary" : ""}
            >
              <b>Contact</b>
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile dropdown menu */}
      <div
        className={`absolute right-2 shadow-lg mt-60 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "text-primary" : ""}
            >
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className={location.pathname === "/About" ? "text-primary" : ""}
            >
              <b>About</b>
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className={location.pathname === "/Contact" ? "text-primary" : ""}
            >
              <b>Contact</b>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
