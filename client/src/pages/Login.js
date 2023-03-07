import { message, Form } from "antd";
import { TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setLoading } from "../redux/features/alertSlice";
import { setUser, setToken } from "../redux/features/authSlice";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const {user}=useSelector(state=>state.auth);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const { email, password } = values;
    dispatch(setLoading(true));
    await axios
      .post("/api/v1/auth/login", values)
      .then((res) => {
        localStorage.setItem(
          "authToken",
          JSON.stringify({
            token: res.data.token,
            user: res.data.user,
          })
        );
        message.success(res.data.message);
        dispatch(setUser(res.data.user));
        dispatch(setToken(res.data.token));
        user && console.log(user)
        if(user?.role==1){
          navigate("/dashboard");
          dispatch(setLoading(false));
        }
        else{
          navigate("/create-profile");
          dispatch(setLoading(false));
        }
      })
      .catch((err) => {
        message.error("error occured", err.message);
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
      <h4 className="text-center">LOGIN</h4>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
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
        Login
      </Button></center>
    </Form>
  );
};

export default Login;
