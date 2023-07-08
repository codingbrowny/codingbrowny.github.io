import Link from "next/link";
import React from "react";
import { VscSend } from "react-icons/vsc";

const CTASection = () => {
  return (
    <section
      id="newproject-section"
      className="py-14 md:py-20 container bg-primary-alt md:bg-[initial] sm:rounded-lg"
    >
      <div className="relative md:bg-primary-alt md:rounded-lg min-h-full md:container md:py-10 flex">
        <section className="md:basis-1/3 space-y-5 ">
          <h2 className="text-xl md:text-3xl text-primary-body font-semibold">
            Have a project in mind?
          </h2>
          <p className="text-primary-input">
            Connect with me now and let&apos;s make your idea a reality
          </p>
          <Link
            href={"/#contact"}
            passHref
            role="button"
            className="btn bg-primary-body text-primary-alt p-2 rounded-md font-medium flex items-center gap-2 w-fit"
          >
            Contact Me
            <VscSend className="text-xl" />
          </Link>
        </section>
        <div className="h-10 w-10 rounded-full shadow-inner shadow-primary-title/10 rotate-180"></div>
      </div>
    </section>
  );
};

export default CTASection;
