import { StaticImageData } from "next/image"

export interface ProjectInterface {
    id: number | string
    title: string
    image: string | StaticImageData
    description: string
    stack: string[]
    url:string
}