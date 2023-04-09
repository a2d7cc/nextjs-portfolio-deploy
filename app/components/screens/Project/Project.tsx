import {FC} from "react"
import { useProject } from "./useProject";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import Heading from "@/components/ui/heading/Heading";
import styles from './project.module.scss'
import { IProject } from "@/shared/types/projects.type";

const Project: FC<{project: IProject}> = ({project}) => {

    return <div className="">
        <div className="rounded ">
        <span className="text-gradient text-7xl mb-5" >{project.title}</span>
        <img className="mt-10 rounded-t-lg object-cover object-center h-80 w-full " src={project.poster} alt="" />
        <div className="bg-white text-black py-10 px-10 leading-loose tracking-wide text-xl" dangerouslySetInnerHTML={{__html: project.body}}/>
        </div>

  </div>
};

export default Project;
