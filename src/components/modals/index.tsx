import { useReduxSelctor } from "../../hooks/useRedux";
import AuthorizartionModal from "./authorization-modal";

const Modals = () => {
  const { authorizationModalVisiblty } = useReduxSelctor(
    (state) => state.modalSlice
  );
  return <>{authorizationModalVisiblty && <AuthorizartionModal />}</>;
};

export default Modals;
