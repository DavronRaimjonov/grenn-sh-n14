import { Button, Form, Input, Upload } from "antd";
import type { AuthUser } from "../../../../@types";
import { useAuthUser } from "react-auth-kit";
import { UploadOutlined } from "@ant-design/icons";
import { useHandler } from "../../../../generic/handler";
interface InputsType {
  name: string;
  username: string;
  phone_number: string;
  email: string;
  surname: string;
}
const Details = () => {
  const auth: AuthUser = useAuthUser()() ?? {};
  const { updeterUserDetails } = useHandler();
  const postDetails = async (e: InputsType) => {
    await updeterUserDetails({
      ...e,
      profile_photo:
        "https://alqadir.edu.pk/wp-content/uploads/2022/09/BS-Islamic-Studies-2022.jpg",
      _id: auth._id,
    });
  };
  return (
    <div>
      <Form
        onFinish={postDetails}
        className="grid grid-cols-2 gap-4 w-full"
        fields={[
          { name: ["name"], value: auth?.name || "" },
          { name: ["email"], value: auth?.email || "" },
          { name: ["username"], value: auth?.username || "" },
          { name: ["surname"], value: auth?.surname || "" },
          { name: ["phone_number"], value: auth?.phone_number || "" },
        ]}
        layout="vertical"
      >
        <div className="w-full">
          <Form.Item
            className="w-full"
            label="First name"
            name="name"
            rules={[{ required: true, message: "Please enter First name" }]}
          >
            <Input
              className="h-[35px] text-[16px] w-full"
              placeholder="Firt name"
            />
          </Form.Item>

          <Form.Item
            className="w-full"
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please eneter email" }]}
          >
            <Input className="h-[35px] text-[16px] " />
          </Form.Item>
          <Form.Item
            className="w-full"
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter username" }]}
          >
            <Input className="h-[35px] text-[16px] " />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            className="w-full"
            label="Last name"
            name="surname"
            rules={[{ required: true, message: "Please enter Last name" }]}
          >
            <Input
              className="h-[35px] text-[16px] w-full"
              placeholder="Firt name"
            />
          </Form.Item>
          <Form.Item
            className="w-full"
            label="Phone number"
            name="phone_number"
            rules={[{ required: true, message: "Please enter Phone number" }]}
          >
            <Input
              addonBefore={"+998"}
              className="h-[35px] text-[16px] w-full"
              placeholder="Phone name"
            />
          </Form.Item>
          <Form.Item
            className="w-full"
            label="Image"
            name="profile_photo"
            rules={[{ required: true, message: "Please enter Image" }]}
          >
            <Upload
              accept=".png,.jpeg,.jpg"
              name="image"
              action={
                "https://greenshop.abduvoitov.com/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
              }
              listType="picture"
              data={{ type: "img" }}
              headers={{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              }}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        </div>
        <button className="bg-[#46A358] w-[150px] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px] mt-[15px]">
          Save changes
        </button>
      </Form>
    </div>
  );
};

export default Details;
