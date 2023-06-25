import * as React from "react";
import { Navbar } from "..";
import HeroBlob from "./blob";
import Socials from "./socials";
import { BsMouse } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="hero-wrappe w-full h-screen overflow-hidden flex flex-col">
      <Navbar />
      <section className="container flex flex-col md:flex-row justify-start items-center gap-16 lg:gap-20 my-auto">
        <div className="md:basis-3/5 lg:basis-2/5 flex items-center gap-8 md:gap-10 lg:gap-14">
          <Socials />
          <div>
            <h1 className="text-primary-title font-bold text-3xl mb-1">
              Hi, I am Browny
            </h1>
            <h3 className="text-primary-lightText mb-3">Frontend Developer</h3>
            <p className="text-primary-text mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestiae aut sint, excepturi possimus magnam.
            </p>
            <button
              type="button"
              className="p-3 bg-primary text-primary-body rounded flex items-center gap-2"
            >
              Contact Me{" "}
                <VscSend className="text-xl" />
            </button>
          </div>
        </div>
        <div className="blob-wrapper self-center justify-self-center">
          <HeroBlob />
        </div>
      </section>
      <Link
        href={"#about-section"}
        className="flex items-center gap-1 text-primary mb-10 self-center"
      >
        <BsMouse className="text-2xl" />
        <span className="text-sm font-medium">Scroll down</span>
      </Link>
    </header>
  );
};

export default Hero;
