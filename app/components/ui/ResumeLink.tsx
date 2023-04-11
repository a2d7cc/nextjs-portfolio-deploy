import { GetResumeUrl } from "@/configs/api.config";
import {FC} from "react"
import cn from 'classnames'

const ResumeLink: FC<{className?: string}> = ({className}) => {
  return (
    <a href={GetResumeUrl()} className={cn("text-gradient btn-link cursor-pointer", className)}>
    My Resume
</a>
  )
};

export default ResumeLink;
