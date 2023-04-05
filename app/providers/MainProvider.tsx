import {FC, PropsWithChildren} from "react"

const MainProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
};

export default MainProvider;
