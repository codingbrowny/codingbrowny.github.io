import React from "react";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { PiGithubLogoFill } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
  return (
    <header
      id="navbar"
      className="sticky top-0 z-[9999] transition-all duration-300 w-full"
    >
      <nav className="container py-5 bg-primary-body flex items-center justify-between">
        <h1 className="logo-text text-xl sm:text-2xl font-semibold text-primary-title">
          Browny
        </h1>
        <button
          type="button"
          id="nav-toggle-btn"
          role="button"
          className="md:hidden rounded-full"
        >
          <CgMenuRight className="text-3xl" />
        </button>

        <ul
          id="nav-list"
          className="shadow-md md:shadow-none px-[1rem] sm:px-[2rem] md:px-0 absolute left-0 -top-96 space-y-5 md:space-y-0 py-5 pb-8 md:py-0 md:pb-0 w-full md:w-auto md:static -z-[1] md:z-auto md:flex md:items-center md:gap-8 lg:gap-10 transition-all md:opacity-100 duration-300 bg-container md:bg-[inherit]"
        >
          <li className="nav-list-item font-medium text-primary-text hover:text-primary">
            <Link href={"#hero"}>Home</Link>
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
          <li className="md:hidden my-10 space-y-3">
            <button
              role="button"
              className="p-2 px-3 mb-5 bg-primary text-primary-body rounded flex items-center gap-1 hover:bg-gradient-to-r from-primary-alt to-primary/40 transition-colors duration-300"
            >
              Download CV <MdOutlineFileDownload className="text-2xl" />
            </button>
            <div className="socials flex items-center gap-5">
              <Link
                href={"https://www.linkedin.com/in/codingbrowny"}
                target="_blank"
                className="block text-2xl transition-all duration-300 text-primary-title hover:text-primary"
              >
                <BiLogoLinkedin />
              </Link>
              <Link
                href={"https://www.github.com/codingbrowny"}
                target="_blank"
                className="block text-2xl transition-all duration-300 text-primary-title hover:text-primary"
              >
                <PiGithubLogoFill />
              </Link>
              <Link
                href={"https://www.twitter.com/codingbrowny"}
                target="_blank"
                className="block text-2xl transition-all duration-300 text-primary-title hover:text-primary"
              >
                <IoLogoTwitter />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
