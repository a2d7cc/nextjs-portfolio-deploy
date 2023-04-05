import { store } from "@/store/store";
import {FC, PropsWithChildren} from "react"
import { Provider } from "react-redux";
import ReduxToast from "./ReduxToast";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReduxToast />
        {children}
      </QueryClientProvider>
    </Provider>
  )
};

export default MainProvider;
