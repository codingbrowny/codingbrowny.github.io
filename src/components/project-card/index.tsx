import * as React from "react";
import Image from "next/image";
import { ProjectInterface } from "@/types/interfaces";
import Link from "next/link";
import { LuExternalLink, LuArrowRight } from "react-icons/lu";

interface CardInterface {
  variant?: "detailed" | "minimal";
  data: ProjectInterface;
}

const ProjectCard = ({ data, variant = "minimal" }: CardInterface) => {
  return variant === "minimal" ? (
    <div className="relative rounded-lg w-full h-full md:h-96 md:border border-primary-input transition-all duration-400 overflow-hidden group/project">
      <Image
        src={data.image}
        alt={data.title}
        className="object-cover h-56 sm:h-60 rounded-lg md:rounded-none md:h-full md:group-hover/project:scale-110 transition-transform duration-500"
      />
      <div className="w-full bg-container md:absolute md:bottom-0 md:h-0 md:bg-opacity-0 md:bg-gradient-to-t from-primary-alt via-primary/80 to-[#000]/20 md:group-hover/project:h-full transition-[height] duration-400 overflow-hidden">
        <div className="w-full h-full flex flex-col md:items-center md:justify-center gap-3 md:gap-5 py-5 md:p-8">
          <h2 className="text-xl font-semibold md:text-center text-primary-title md:text-primary-body">
            {data.title}
          </h2>
          <p className="text-primary-text md:text-primary-body md:text-center">
            {data.description}
          </p>
          <Link
            href={data.url}
            className="bg-primary p-2 rounded-md md:text-xl text-primary-alt md:rounded-full md:p-3 md:bg-container w-20 md:w-fit group/demo"
          >
            <span className="md:hidden text-primary-body flex items-center gap-1 transition-all duration-200 group-hover/demo:gap-1.5">
              Demo
              <LuArrowRight />
            </span>
            <LuExternalLink className="hidden md:block" />
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default ProjectCard;
