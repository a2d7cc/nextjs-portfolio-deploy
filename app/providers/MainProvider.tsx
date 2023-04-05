import { store } from "@/store/store";
import {FC, PropsWithChildren} from "react"
import { Provider } from "react-redux";
import ReduxToast from "./ReduxToast";

const MainProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <Provider store={store}>
      <ReduxToast />
      {children}
    </Provider>
  )
};

export default MainProvider;
