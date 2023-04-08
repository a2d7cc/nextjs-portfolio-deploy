import {FC, useEffect, useState} from "react"
import { useSkill } from "./useSkill";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import Heading from "@/components/ui/heading/Heading";
import styles from './skill.module.scss'




const Skill: FC = () => {
    const {isLoading, data: skill} = useSkill()


  return <div className="">
    {isLoading? <SkeletonLoader count={20} /> : (
        <div className="">
        <span className="text-gradient text-5xl" >{skill?.title}</span>
        <div className="rounded-t-lg mt-5 bg-white text-black py-10 px-10 leading-loose tracking-wide text-xl" dangerouslySetInnerHTML={{__html: skill?.body || ''}}/>
        </div>
        
    )}

  </div>
};

export default Skill;
