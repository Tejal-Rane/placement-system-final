import { message, Form } from "antd";
import { TextField, Button } from "@material-ui/core";
import { setLoading } from "../../redux/features/alertSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
const AddStudent = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const { name, email, password } = values;
    dispatch(setLoading(true));
    axios
      .post("/api/v1/admin/add-student", {
        name,
        email,
        password,
      })
      .then((res) => {
        message.success(res.data.message);
        dispatch(setLoading(false));
      })
      .catch((err) => {
        message.error(err.message);
        dispatch(setLoading(true));
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      style={{
        maxWidth: "360px",
        margin: "150px auto",
        boxShadow: "1px 2px 15px grey",
        padding: "20px 10px",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h4 className="text-center">ADD STUDENT</h4>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <TextField
          type={"text"}
          label="Name"
          placeholder="enter name"
          variant="standard"
          className="col-12 my-3"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your valid email!" }]}
      >
        <TextField
          type={"email"}
          label="Email"
          placeholder="enter valid email"
          variant="standard"
          className="col-12 my-3"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <TextField
          type={"password"}
          label="Password"
          placeholder="enter password"
          variant="standard"
          className="col-12 my-3"
        />
      </Form.Item>

      <center><Button variant="contained" color="primary" type="submit">
        Add Student
      </Button></center>
    </Form>
  );
};

export default AddStudent;
