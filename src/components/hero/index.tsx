import * as React from "react";
import HeroBlob from "./blob";
import Socials from "./socials";
import { BsMouse } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative hero-section container pb-10 overflow-hidden flex flex-col items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 my-auto">
        <div className="md:basi flex items-center gap-8 md:gap-10 lg:gap-14 order-2 md:order-1">
          <Socials />
          <div>
            <header>
              <h1 className="text-primary-title font-bold text-3xl mb-1">
                Hi, I am Browny
              </h1>
            </header>
            <h3 className="text-primary-text mb-3" role="heading" aria-label="job-description">Frontend Developer</h3>
            <p className="text-primary-text mb-5 md:w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestiae aut sint, excepturi possimus magnam.
            </p>
            <button
              id="hero-cto-btn"
              type="button"
              className="p-3 bg-primary text-primary-body rounded flex items-center gap-2"
            >
              Contact Me <VscSend className="text-xl" />
            </button>
          </div>
        </div>
        <div className="blob-wrapper self-center justify-self-center order-1 md:order-2 md:w-full md:flex md:justify-center">
          <HeroBlob />
        </div>
      </div>
      <Link
        href={"#about"}
        className="flex items-center gap-1 text-primary self-center"
      >
        <BsMouse className="text-2xl" />
        <span className="text-sm font-medium">Scroll down</span>
      </Link>
    </section>
  );
};

export default Hero;
