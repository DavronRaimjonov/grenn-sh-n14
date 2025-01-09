import { useMutation } from "react-query";
import { useAxios } from "../../useAxios";
import { useDispatch } from "react-redux";
import { setAuthorizationModalVisiblty } from "../../../redux/modal-slice";
import { notificationApi } from "../../../generic/notification";
import { signInWithGoogle } from "../../../config";
import { useReduxDispatch } from "../../useRedux";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { AuthUser } from "../../../@types";
const useLoginMutate = () => {
  const dispatch = useDispatch();
  const axios = useAxios();
  const notify = notificationApi();
  const signIn = useSignIn();
  return useMutation({
    mutationFn: ({ data }: { data: object }) =>
      axios({ url: "/user/sign-in", body: data, method: "POST" }),
    onSuccess: ({ data }: { data: { token: string; user: AuthUser } }) => {
      const { token } = data;
      dispatch(
        setAuthorizationModalVisiblty({ open: false, isLoading: false })
      );
      localStorage.setItem("token", token);
      console.log(data);
      signIn({
        auth: {
          token: "sadsadadasdasdasd",
          type: "Bearer",
        },

        userState: { user: "salom" },
      });
      notify("login");
    },
    onError: (error: { status: number }) => {
      if (error.status === 409) notify(409);
      dispatch(setAuthorizationModalVisiblty({ open: true, isLoading: false }));
    },
  });
};

const useLoginWithGoogle = () => {
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
    onSuccess: ({ data }: { data: { token: string; user: AuthUser } }) => {
      dispatch(
        setAuthorizationModalVisiblty({ open: false, isLoading: false })
      );
      const { token } = data;
      localStorage.setItem("token", token);
      notify("login");
    },
    onError: (error: { status: number }) => {
      if (error.status === 409) notify(409);
      dispatch(setAuthorizationModalVisiblty({ open: true, isLoading: false }));
    },
  });
};

const useRegisterMutate = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  return useMutation({
    mutationFn: ({ data }: { data: object }) =>
      axios({ url: "/user/sign-up", method: "POST", body: data }),
    onSuccess: ({ data }: { data: { token: string; user: AuthUser } }) => {
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

const useRegisterWithGoogle = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "/user/sign-up/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: ({ data }: { data: { token: string; user: AuthUser } }) => {
      const { token } = data;
      localStorage.setItem("token", token);
      notify("register");
      dispatch(
        setAuthorizationModalVisiblty({ open: false, isLoading: false })
      );
    },
    onError: (error) => {
      setAuthorizationModalVisiblty({ open: true, isLoading: false });
      notify(406);
      console.log(error);
    },
  });
};
export {
  useLoginMutate,
  useLoginWithGoogle,
  useRegisterMutate,
  useRegisterWithGoogle,
};
