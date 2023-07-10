import { ProjectInterface, ServiceInterface } from "@/types/interfaces";
import Project1 from "../../public/images/project-1.jpg"
import Project2 from "../../public/images/project-2.jpg"
import Project3 from "../../public/images/project-3.jpg"
import { BsPhone } from "react-icons/bs";
import { BsCodeSlash, BsDatabase } from "react-icons/bs";

export const Projects:ProjectInterface[] = [
    {
        id: 1,
        title: "Weather App",
        image: Project1,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloremque dolorem neque, sed eius delectus.",
        stack: ["React", "Typescript", "Git"],
        url: ""
    },
    {
        id: 2,
        title: "Weather App",
        image: Project2,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloremque dolorem neque, sed eius delectus.",
        stack: ["React", "Typescript", "Git"],
        url: ""
    },
    {
        id: 3,
        title: "Weather App",
        image: Project3,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloremque dolorem neque, sed eius delectus.",
        stack: ["React", "Typescript", "Git"],
        url: ""
    },
    // {
    //     id: 4,
    //     title: "Weather App",
    //     image: Project2,
    //     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloremque dolorem neque, sed eius delectus.",
    //     stack: ["React", "Typescript", "Git"],
    //     url: ""
    // },
]

export const Services: ServiceInterface[] = [
  {
    id: 1,
    title: "App Development",
    icon: BsPhone,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloremque dolorem neque, sed eius delectus.",
    link: "",
  },
  {
    id: 2,
    title: "Frontend Development",
    icon: BsCodeSlash,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloremque dolorem neque, sed eius delectus.",
    link: "",
  },
  {
    id: 3,
    title: "Backend Development",
    icon: BsDatabase,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloremque dolorem neque, sed eius delectus.",
    link: "",
  },
];

export const EducationData = [
  {
    id: 1,
    school: "University of Energy and Natural Resources",
    course: "Bsc. Computer Engineering",
    date: "2017 - 2021"
  }
]

export const WorkExperience = [
  {
    id: 1,
    org: "Erogana",
    role: "Lead Frontend Developer",
    date: "Oct 2022 - Present"
  },
  {
    id: 2,
    org: "Ghana Library Authority",
    role: "Frontend Developer",
    date: "Oct 2021 - Aug 2022"
  },
  {
    id: 3,
    org: "Tarkwa Municipal Hospital",
    role: "I.T Support Officer - Intern",
    date: "May 2019 - Aug 2019"
  },
]

export const CertificateData = [
  {
    id: 1,
    org: "HackerRank",
    role: "Intermediate JavaScript Developer",
    date: "2021"
  }
]