import { useMutation } from "react-query";
import { useAxios } from "../../useAxios";
import { useDispatch } from "react-redux";
import { setAuthorizationModalVisiblty } from "../../../redux/modal-slice";
import { notificationApi } from "../../../generic/notification";
import { signInWithGoogle } from "../../../config";
import { useReduxDispatch } from "../../useRedux";

const useLogin = () => {
  const dispatch = useDispatch();
  const axios = useAxios();
  const notify = notificationApi();
  return useMutation({
    mutationFn: ({ data }: { data: object }) =>
      axios({ url: "/user/sign-in", body: data, method: "POST" }),
    onSuccess: (data) => {
      const { token } = data.data;

      dispatch(
        setAuthorizationModalVisiblty({ open: false, isLoading: false })
      );
      localStorage.setItem("token", token);

      notify("login");
    },
    onError: (error: { status: number }) => {
      if (error.status === 409) notify(409);
      dispatch(setAuthorizationModalVisiblty({ open: true, isLoading: false }));
    },
  });
};

const loginWithGoogle = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();

  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return await axios({
        url: "/user/sign-in/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: (data) => {
      dispatch(
        setAuthorizationModalVisiblty({ open: false, isLoading: false })
      );
      const { token } = data.data;
      localStorage.setItem("token", token);
      notify("login");
    },
    onError: (error: { status: number }) => {
      if (error.status === 409) notify(409);
      dispatch(setAuthorizationModalVisiblty({ open: true, isLoading: false }));
    },
  });
};

const useReigster = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  return useMutation({
    mutationFn: ({ data }: { data: object }) =>
      axios({ url: "/user/sign-up", method: "POST", body: data }),
    onSuccess: (data) => {
      console.log(data);
      dispatch(
        setAuthorizationModalVisiblty({ open: false, isLoading: false })
      );
      notify("register");
    },
    onError: (error: { status: number }) => {
      if (error.status === 406) notify(406);
      dispatch(setAuthorizationModalVisiblty({ open: true, isLoading: false }));
    },
  });
};
export { useLogin, loginWithGoogle, useReigster };
