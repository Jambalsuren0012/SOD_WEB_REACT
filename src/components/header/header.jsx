import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const navItems = [
    { name: "Нүүр хуудас", href: "/home" },
    { name: "Үйлчилгээ", href: "/Service" },
    { name: "Бидний тухай", href: "/about" },
    { name: "Холбоо барих", href: "/contact" },
  ];

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-white">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/home" class="flex items-center">
            <img
              src="../../images/sod logo.png"
              class="mr-3 w-12 h-12"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-600">
              SOD ELECTRONIC
            </span>
          </a>
          <div class="flex">
            <img class="mr-2" src="../../images/vector.png" alt="" />
            <p>
              <a href="tel:70118899">7011-8899</a>
            </p>
          </div>

          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-sky-700 dark:focus:ring-sky-600"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              menuOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    onClick={toggleMenu}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to={item.href}
                    href="#"
                    className="block py-2 pl-3 pr-4 bg-white rounded md:bg-transparent md:p-0 mt-2 text-gray-500"
                    aria-current="page"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                E-commerce
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
