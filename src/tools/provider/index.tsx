import { ReactElement } from "react";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
const store2 = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

const PorivderConfg = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <AuthProvider store={store2}>
        <Provider store={store}>
          <Modals /> {children}
        </Provider>
      </AuthProvider>
    </>
  );
};

export default PorivderConfg;
