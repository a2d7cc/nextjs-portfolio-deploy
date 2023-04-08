import {FC} from "react"
import { useProject } from "./useProject";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import Heading from "@/components/ui/heading/Heading";
import styles from './project.module.scss'

const Project: FC = () => {
    const {isLoading, data: project} = useProject()

    return <div className="">
    {isLoading? <SkeletonLoader count={20} /> : (
        <div className="rounded ">
        <span className="text-gradient text-7xl mb-5" >{project?.title}</span>
        <img className="mt-10 rounded-t-lg object-cover object-center h-80 w-full " src={project?.poster} alt="" />
        <div className="bg-white text-black py-10 px-10 leading-loose tracking-wide text-xl" dangerouslySetInnerHTML={{__html: project?.body || ''}}/>
        </div>
        
    )}

  </div>
};

export default Project;
