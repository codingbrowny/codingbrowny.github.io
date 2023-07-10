import * as React from "react";
import Link from "next/link";
import { ServiceInterface } from "@/types/interfaces";

const ServiceCard = ({ icon, link, title, description }: ServiceInterface) => {
  const Icon = () => icon({});

  return (
    <div className="transition-all duration-[400ms] space-y-8 p-8 lg:p-10 w-full overflow-hidden group rounded-lg hover:shadow-app shadow-primary-body hover:-translate-y-3 border border-primary-input">
      <span className="text-5xl text-primary transition-colors duration-200">
        <Icon />
      </span>
      <div className="space-y-4">
        <h3 className="service-type font-semibold text-xl text-primary-title">
          {title.slice(0, title.indexOf(" "))}
          <br />
          {title.slice(title.indexOf(" "))}
        </h3>
        <p className="service-desc text-primary-text">
          {description}
        </p>
        <Link
          href=""
          className="relative text-sm block font-medium text-primary w-fit after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:w-0 group-hover:after:w-[120%] after:bg-primary pb-0.5 after:transition-[width] after:duration-300"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
