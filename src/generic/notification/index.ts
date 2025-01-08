import { notification } from "antd";

type NotificationType = "login" | "register" | "passowrd" | 406 | 409;

const notificationApi = () => {
  const nottify = (props: NotificationType) => {
    switch (props) {
      case "login":
        return notification.success({ message: "Login succsesful" });
      case "register":
        return notification.success({ message: "Register succsesful" });
      case "passowrd":
        return notification.error({
          message: "Confirm password is not match !",
        });
      case 406:
        return notification.error({
          message:
            "User with same email already exists. Please make sure email is unique amd valid.",
        });
      case 409:
        return notification.error({ message: "Login or passowr wrong",});
      default:
        break;
    }
  };
  return nottify;
};

export { notificationApi };
