import { ReactElement } from "react";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const PorivderConfg = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Provider store={store}>
        <Modals /> {children}
      </Provider>
    </>
  );
};

export default PorivderConfg;
