import { GetResumeUrl } from "@/configs/api.config";
import {FC} from "react"

const ResumeLink: FC = () => {
  return (
    <a href={GetResumeUrl()} className="text-gradient btn-link">
    My Resume
</a>
  )
};

export default ResumeLink;
