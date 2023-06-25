import { ProjectInterface } from "@/types/interfaces";
import Project1 from "../../public/images/project-1.jpg"
import Project2 from "../../public/images/project-2.jpg"
import Project3 from "../../public/images/project-3.jpg"

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
        id: 2,
        title: "Weather App",
        image: Project3,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloremque dolorem neque, sed eius delectus.",
        stack: ["React", "Typescript", "Git"],
        url: ""
    },
]