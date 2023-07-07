import React from "react";
import Link from "next/link";
import ProjectCard from "../project-card";
import { Projects } from "@/utils/vendor";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="container py-20 space-y-12">
      <h2 className="text-3xl text-center text-primary-title font-semibold">
        My Works
        <span className="block text-base text-primary-lightText font-normal">
          Most recent projects
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 overflow-hidden">
        {Projects.map((item, index) => {
          return index < 3 ? <ProjectCard key={item.id} data={item} /> : null;
        })}
      </div>
      <div className="w-full flex items-center justify-center">
        <Link
          href=""
          className="relative w-fit px-10 py-3 z-10 text-primary-body after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-primary after:-z-10 hover:after:scale-95 after:transition-all after:duration-300 after:rounded"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSection;
