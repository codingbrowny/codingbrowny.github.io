import Link from 'next/link'
import React from 'react'
import {CgMenuRight} from "react-icons/cg"

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-5">
      <h1 className="logo-text text-2xl font-semibold text-primary-title">
        Browny
      </h1>
      <ul className="nav-list md:inline-flex md:items-center md:gap-5 hidden">
        <li className="nav-list-item font-medium text-primary-title hover:text-primary">
          <Link href={""}>Home</Link>
        </li>
        <li className="nav-list-item font-medium text-primary-title hover:text-primary">
          <Link href={"#about-section"}>About</Link>
        </li>
        <li className="nav-list-item font-medium text-primary-title hover:text-primary">
          <Link href={"#service-section"}>Services</Link>
        </li>
        <li className="nav-list-item font-medium text-primary-title hover:text-primary">
          <Link href={"#portfolio-section"}>Portfolio</Link>
        </li>
        <li className="nav-list-item font-medium text-primary-title hover:text-primary">
          <Link href={"contact-section"}>Contact</Link>
        </li>
      </ul>
      <div className="md:hidden nav-toggle-btn p-2 rounded-full shadow-app bg-[transparent]">
        <CgMenuRight className='text-3xl' />
      </div>
    </nav>
  );
}

export default Navbar