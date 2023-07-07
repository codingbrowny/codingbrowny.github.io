import { StaticImageData } from "next/image"
import { IconType } from "react-icons/lib"

export interface ProjectInterface {
    id: number | string
    title: string
    image: string | StaticImageData
    description: string
    stack: string[]
    url:string
}

export interface ServiceInterface {
    id?: number,
    title: string
    icon: IconType
    description?: string
    link?: string
}