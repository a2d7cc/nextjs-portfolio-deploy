import {FC, useEffect, useState} from "react"
import { useSkill } from "./useSkill";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import Heading from "@/components/ui/heading/Heading";
import styles from './skill.module.scss'
import { ISkill } from "@/shared/types/skills.type";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";




const Skill: FC<{skill: ISkill}> = ({skill}) => {
  const router = useRouter()
    
  return <div className="rounded">
    <div>
    <button className="lg:text-4xl xl:text-5xl text-2xl mr-4" onClick={() => router.back()}><FaArrowLeft/></button>
    <span className="text-gradient lg:text-5xl xl:text-7xl md:text-4xl  text-4xl md:leading-relaxed lg: leading-relaxed leading-relaxed" >{skill?.title}</span>
    </div>
          
    <div className="group relative overflow-hidden">
        <img className="mt-6 lg:mt-10 brightness-95 group-hover:scale-105 rounded-t-lg group-hover:brightness-100 transition-all duration-500  object-cover object-center md:h-[28rem] lg:h-[38rem] w-full " src={skill?.poster} alt="" />    
        </div>
          <div className="inner-html bg-white text-black py-14 px-8 sm:px-14 md:py-18 lg:px-28 leading-loose tracking-wide text-base  text-base md:text-xl lg:text-2xl" dangerouslySetInnerHTML={{__html: skill?.body || ''}}/>
        </div>
      
};

export default Skill;
