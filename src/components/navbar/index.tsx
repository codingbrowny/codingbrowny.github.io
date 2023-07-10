import React from "react";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  return (
    <header
      id="navbar"
      className="sticky top-0 z-[9999] transition-all duration-300 w-full"
    >
      <nav className="container py-5 bg-white flex items-center justify-between">
        <h1 className="logo-text text-xl sm:text-2xl font-semibold text-primary-title">
          Browny
        </h1>
        <button
          id="nav-toggle-btn"
          role="button"
          className="md:hidden rounded-full"
        >
          <CgMenuRight className="text-3xl" />
        </button>

        <ul
          id="nav-list"
          className="shadow-md md:shadow-none px-[1rem] sm:px-[2rem] md:px-0 
          absolute left-0 top-[-400px] space-y-5 md:space-y-0 py-5 pb-8 md:py-0 md:pb-0 w-full 
          md:w-auto md:static md:z-auto md:flex md:items-center md:gap-10 transition-all 
          ease-in md:opacity-100 duration-300 bg-container md:bg-[inherit]]"
        >
          <li className="nav-list-item font-medium text-primary-text hover:text-primary">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="nav-list-item font-medium text-primary-text hover:text-primary">
            <Link href={"#about"}>About</Link>
          </li>

          <li className="nav-list-item font-medium text-primary-text hover:text-primary">
            <Link href={"#service"}>Services</Link>
          </li>

          <li className="nav-list-item font-medium text-primary-text hover:text-primary">
            <Link href={"#portfolio"}>Portfolio</Link>
          </li>

          <li className="nav-list-item font-medium text-primary-text hover:text-primary">
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>

    // </header>
  );
};

export default Navbar;
