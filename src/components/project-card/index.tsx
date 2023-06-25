import * as React from "react";
import Image from "next/image";
import { ProjectInterface } from "@/types/interfaces";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

interface CardInterface {
  variant?: "detailed" | "minimal";
  data: ProjectInterface;
}

const ProjectCard = ({ data, variant = "minimal" }: CardInterface) => {
  return variant === "minimal" ? (
    <div className="relative rounded-lg w-full h-96 border border-slate-200 transition-all duration-400 overflow-hidden group">
      <Image
        src={data.image}
        alt={data.title}
        className="object-cover h-full group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute bottom-0 w-full h-0 bg-gradient-to-t from-rose-600 via-rose-600/80 to-black/10 group-hover:h-full transition-[height] duration-400 overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-8">
          <h2 className="text-xl font-semibold text-center text-white">
            {data.title}
          </h2>
          <p className="text-white">{data.description}</p>
          <Link href={data.url} className="rounded-full p-3 text-xl bg-white">
            <LuExternalLink />
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default ProjectCard;
