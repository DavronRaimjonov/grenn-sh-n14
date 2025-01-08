import { ReactElement } from "react";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import { QueryClient, QueryClientProvider } from "react-query";
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
      <QueryClientProvider client={queryClinet}>
        <AuthProvider store={store2}>
          <Provider store={store}>
            <Modals /> {children}
          </Provider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default PorivderConfg;
