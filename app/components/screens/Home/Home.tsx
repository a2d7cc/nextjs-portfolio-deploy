import Meta from "@/providers/HeadProvider/Meta/Meta";
import {FC} from "react"

const Home: FC = () => {
  return (
    <Meta
    title="Portfolio"
    description="Welcome to my personal developer website!"
>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </Meta>
  )
};

export default Home;
