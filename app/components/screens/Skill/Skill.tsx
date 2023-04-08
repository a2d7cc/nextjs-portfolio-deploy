import {FC, useEffect, useState} from "react"
import { useSkill } from "./useSkill";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import Heading from "@/components/ui/heading/Heading";
import styles from './skill.module.scss'




const Skill: FC = () => {
    const {isLoading, data: skill} = useSkill()


  return <div className={styles.container}>
    {isLoading? <SkeletonLoader count={20} /> : (
        <div className={styles.skill}>
        <Heading className="text-center text-black text-5xl" title={skill?.title} />
        <div dangerouslySetInnerHTML={{__html: skill?.body || ''}}/>
        </div>
        
    )}

  </div>
};

export default Skill;
