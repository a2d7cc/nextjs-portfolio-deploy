import {FC} from "react"
import { useProject } from "./useProject";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import Heading from "@/components/ui/heading/Heading";
import styles from './project.module.scss'
import { IProject } from "@/shared/types/projects.type";
import {  FaArrowLeft, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const Project: FC<{project: IProject}> = ({project}) => {
  const router = useRouter()

    return <div className="project-page">

        <div className="flex items-center mb-4">
        <button className="lg:text-5xl text-2xl mr-4" onClick={() => router.back()}><FaArrowLeft/></button>
        <span className="text-gradient lg:text-7xl md:text-6xl  text-2xl sm:text-4xl  md:leading-relaxed lg:leading-relaxed leading-relaxed" >{project.title}</span>
        </div>
        <div className="group relative overflow-hidden mt-2 lg:mt-6 lg:mt-10 ">
        <img className="brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500  object-cover object-center  h-[12rem] h-[22rem]  md:h-[28rem] lg:h-[38rem] w-full " src={project.poster} alt="" />        
        <div className="absolute  flex flex-col left-4 bottom-4">
          <span className="text-2xl md:text-4xl mb-2 md:mb-4 text-gradient">Stack:</span>
          <ul className="flex flex-wrap ">
          {project.tags.map((tag, index) => {
            return <li key={index} className="btn mr-2 mb-2 flex justify-center rounded-lg items-center max-md:h-[28px]  md:max-lg:h-[40px] md:max-lg:px-4 max-md:px-2 lg:btn-sm lg:text-xl text-xs">
              {tag.name}
            </li>
        })}
        </ul>
        </div>
        <a className="absolute max-xl:left-4 max-xl:top-8  xl:right-16 xl:bottom-8 flex items-center text-2xl md:text-4xl color-black" href={project.git} target="_blank">
								<FaGithub  /> <span className="ml-2 text-2xl md:text-4xl  text-gradient">Github</span>
					</a>
        </div>
        <div className="inner-html bg-white text-black  py-2 sm:py-10 px-8 sm:px-14 md:py-18 lg:px-28 leading-loose tracking-wide text-base  text-base md:text-xl lg:text-2xl" dangerouslySetInnerHTML={{__html: project.body}}/>
            

  </div>
};

export default Project;
