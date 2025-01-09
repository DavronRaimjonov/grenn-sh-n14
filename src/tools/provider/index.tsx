import { ReactElement } from "react";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import createStore from "react-auth-kit/createStore";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "react-auth-kit";
const store2 = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});
const queryClinet = new QueryClient();

const PorivderConfg = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <AuthProvider store={store2}>
        <QueryClientProvider client={queryClinet}>
          <Provider store={store}>
            <Modals /> {children}
          </Provider>
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
};

export default PorivderConfg;
