import { useAuthUser, useSignIn } from "react-auth-kit";
import { useAxios } from "../../hooks/useAxios";
import { AuthUser } from "../../@types";
import { notificationApi } from "../notification";

interface LikeHandlerType {
  isLiked: boolean;
  data: {
    route_path: string;
    flower_id: string;
  };
}
const useHandler = () => {
  const axios = useAxios();
  const auth: AuthUser = useAuthUser()() ?? {};
  const signIn = useSignIn();
  const notify = notificationApi();
  const likeHandler = ({ data, isLiked }: LikeHandlerType) => {
    const like = async () => {
      signIn({
        token: localStorage.getItem("token") as string,
        tokenType: "Bearer",
        expiresIn: 3600,
        authState: {
          ...auth,
          wishlist: [...(auth.wishlist ?? []), data],
        },
      });
      notify("like");
      await axios({
        url: "/user/create-wishlist",
        method: "POST",
        body: data,
      });
    };
    const disLike = async () => {
      signIn({
        token: localStorage.getItem("token") as string,
        tokenType: "Bearer",
        expiresIn: 3600,
        authState: {
          ...auth,
          wishlist: auth.wishlist?.filter(
            (value) => value.flower_id !== data.flower_id
          ),
        },
      });
      notify("disLike");
      await axios({
        url: "/user/delete-wishlist",
        method: "DELETE",
        body: { _id: data.flower_id },
      });
    };
    if (isLiked) {
      return disLike;
    }

    return like;
  };

  return { likeHandler };
};

export { useHandler };
