import * as React from "react";
import Image from "next/image";
import ProfilePicture from "../../../public/images/profile.jpg";
import {MdOutlineFileDownload} from "react-icons/md"

const Stat = ({ title, value }: { title: string; value: string | number }) => (
  <div className="stat text-center">
    <h3 className="text-2xl text-primary-title font-semibold">{value}</h3>
    <h4 className="text-sm text-primary-lightText whitespace-break-spaces break-words">
      {title.slice(0,title.indexOf(" "))}<br />{" "}
      {title.slice(title.indexOf(" "))}
    </h4>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about-section" className="about-section container py-20">
      <h2 className="text-3xl text-center text-primary-title font-bold">
        About Me
      </h2>
      <h5 className="text-primary-lightText text-center">
        My Introduction
      </h5>
      <div className="w-full flex flex-col md:flex-row items-start justify-around gap-10 mt-16">
        <div className="profile-image-wrapper">
          <Image
            src={ProfilePicture}
            alt=""
            className="relative rounded-lg shadow-app w-72 sm:w-80 object-cover"
          />
        </div>
        <div className="about-content md:basis-2/4 space-y-8">
          <p className="text-primary-lighttext">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            adipisci pariatur ipsa laborum saepe facere consequuntur ullam
            dolorem id voluptates. Quis in earum neque sed id deserunt vitae
            quos similique.
          </p>
          <div className="stats-group flex items-center gap-10">
            <Stat title="Years experience" value={"3+"} />
            <Stat title="Projects completed" value={"17+"} />
            <Stat title="Companies worked" value={"3+"} />
          </div>
          <button
            role="button"
            className="flex items-center gap-1 hover:bg-primary bg-primary-alt p-2 text-primary-body text-sm rounded-lg"
          >
            Download CV <MdOutlineFileDownload className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
