import {FC, useEffect, useState} from "react"
import { useSkill } from "./useSkill";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import Heading from "@/components/ui/heading/Heading";
import styles from './skill.module.scss'
import { ISkill } from "@/shared/types/skills.type";




const Skill: FC<{skill: ISkill}> = ({skill}) => {
    
  return <div className="rounded">
          <span className="text-gradient text-5xl" >{skill?.title}</span>
          <img className="mt-10 rounded-t-lg object-cover object-center h-80 w-full " src={skill.poster} alt="" />
          <div className="rounded-t-lg bg-white text-black py-10 px-10 leading-loose tracking-wide text-base md:text-xl" dangerouslySetInnerHTML={{__html: skill?.body || ''}}/>
        </div>
      
};

export default Skill;
