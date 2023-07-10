import React from "react";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoLogoTwitter } from "react-icons/io";

const Socials = () => {
  return (
    <div className="socials space-y-5">
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
  );
};

export default Socials;
