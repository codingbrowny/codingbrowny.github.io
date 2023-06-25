import Link from "next/link";
import * as React from "react";
import {BsFront} from "react-icons/bs"

interface ServiceCardInterface {
  icon: string;
  link?: string;
  title?: string;
  description?: string;
}

const ServiceCard = () => {
  return (
    <div className="transition-all duration-[400ms] space-y-8 p-8 lg:p-10 w-full overflow-hidden group rounded-lg hover:shadow-app hover:-translate-y-3 hover:shadow-white bg-white hover:bg-primary border border-slate-200">
      <span className="text-5xl group-hover:text-white">
        <BsFront />
      </span>
      <div className="space-y-4">
        <h3 className="service-type font-semibold text-xl">
          Mobile Development
        </h3>
        <p className="service-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          doloremque dolorem neque, sed eius delectus.
        </p>
        <Link
          href=""
          className="text-sm block font-medium group-hover:text-white w-fit"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
