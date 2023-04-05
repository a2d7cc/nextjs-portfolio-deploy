import { store } from "@/store/store";
import {FC, PropsWithChildren} from "react"
import { Provider } from "react-redux";
import ReduxToast from "./ReduxToast";
import { QueryClient, QueryClientProvider } from "react-query";
import HeadProvider from "./HeadProvider/HeadProvider";
import { TypeComponentAuthFields } from "./AuthProvider/auth.types";
import AuthProvider from "./AuthProvider/AuthProvider";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<TypeComponentAuthFields & PropsWithChildren> = ({Component, children}) => {
  return (
    <HeadProvider>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReduxToast />
        <AuthProvider Component={Component}>
        {children}
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
    </HeadProvider>
  )
};

export default MainProvider;
