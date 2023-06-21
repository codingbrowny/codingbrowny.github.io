import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-5">
      <h1 className="logo-text text-2xl font-semibold">
        <span className='text-sky-600'>B</span>rowny
      </h1>
      <ul className="nav-list md:inline-flex md:items-center md:gap-5">
        <li className="nav-list-item font-medium">
          <Link href={""}>Home</Link>
        </li>
        <li className="nav-list-item font-medium">
          <Link href={"#about-section"}>About</Link>
        </li>
        <li className="nav-list-item font-medium">
          <Link href={"#service-section"}>Services</Link>
        </li>
        <li className="nav-list-item font-medium">
          <Link href={"#portfolio-section"}>Portfolio</Link>
        </li>
        <li className="nav-list-item font-medium">
          <Link href={"contact-section"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar