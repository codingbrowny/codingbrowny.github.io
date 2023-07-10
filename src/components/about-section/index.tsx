import * as React from "react";
import Image from "next/image";
import ProfilePicture from "../../../public/images/profiles.png";
import  {MdOutlineFileDownload} from "react-icons/md"
import { QualificationSection } from "..";

const Stat = ({ title, value }: { title: string; value: string | number }) => (
  <div className="stat text-center">
    <h3 className="text-2xl text-primary-title font-semibold">{value}</h3>
    <h4 className="text-sm text-primary-lightText whitespace-break-spaces break-words">
      {title.slice(0, title.indexOf(" "))}
      <br />
      {title.slice(title.indexOf(" ") + 1)}
    </h4>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="about-section container py-20">
      <h2 className="text-3xl text-center text-primary-title font-bold">
        About Me
        <span className="block text-base text-primary-lightText font-normal">
          My Introduction
        </span>
      </h2>
      <div className="w-full flex flex-col sm:flex-row items-start justify-around gap-7 md:gap-10 my-16">
        <div className="profile-image-wrapper">
          <Image
            src={ProfilePicture}
            alt="My Potrait"
            className="relative rounded-lg bg-primary-alt shadow-app min-w-[230px] w-72 sm:w-60 md:w-80 object-cover"
          />
        </div>
        <div className="about-content w-full md:basis-2/4 space-y-6">
          <p
            className="text-primary-text"
            aria-labelledby="about"
          >
            I am a dedicated software engineer with a specialty in frontend
            development and over 3 years of professional experience. I love
            building cutting-edge, functional, optimized, and scalable
            applications that are also SEO-friendly.
            <span className="block">
              I love working in an environment where I can utilize my skills and
              experience to yield the best results. I believe in teamwork but
              also enjoy working independently when necessary. I&apos;m a
              problem solver, a great team leader, and have awesome
              communication skills.
            </span>
          </p>
          <div className="stats-group flex items-center gap-10">
            <Stat title="Years experience" value={"3+"} />
            <Stat title="Projects completed" value={"17+"} />
            <Stat title="Companies worked" value={"3+"} />
          </div>
          <button
            role="button"
            className="p-2 bg-primary text-primary-body rounded flex items-center gap-1 hover:bg-gradient-to-r from-primary-alt to-primary/40 transition-colors duration-300"
          >
            Download CV <MdOutlineFileDownload className="text-2xl" />
          </button>
        </div>
      </div>
      {/* Qualification Section */}
      <section className="qualification-section">
        <h3 className="text-center text-primary-title text-3xl font-semibold">
          Qualifications
        </h3>
        <h5 className="text-center text-primary-lightText mb-5 md:mb-10">
          My career path
        </h5>
        <QualificationSection />
      </section>
    </section>
  );
};

export default AboutSection;
