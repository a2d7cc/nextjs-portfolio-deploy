import { IProject } from "@/shared/types/projects.type"
import { ISkill } from "@/shared/types/skills.type"

export interface IHome {
    projects: IProject[]
    skills: ISkill[]
  }