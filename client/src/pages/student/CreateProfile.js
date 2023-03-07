import { DatePicker, Form, Input, message, Radio, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Box, Button, Card } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import FileBase64 from "react-file-base64";
import { useParams } from "react-router-dom";
const CreateProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const [details, setDetails] = useState();
  const params = useParams();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedExtensions = /(\.pdf)$/i;
    if (!allowedExtensions.exec(file.name)) {
      alert('Please upload a PDF file only.');
      setSelectedFile(null);
    } else {
      setSelectedFile(file);
    }
  };
  function disabledDate(current) {
    // set minimum date to January 1, 2022 and maximum date to December 31, 2022
    const minDate = new Date('2001-01-01');
    const maxDate = new Date('2003-12-31');

    // disable dates that fall outside of the range
    return current && (current < minDate || current > maxDate);
  }
  useEffect(() => {
    const getprofiledetails = async () => {
      await axios
        .get(
          `/api/v1/user/get-profile-details/${params.id}`
        )
        .then((res) => {
          setDetails(res.data[0]);
        });
    };
    getprofiledetails();
  }, []);

  const onFinish = async (values) => {
    console.log(values);
    setDetails({ ...details, ...values });
    axios
      .post("/api/v1/user/create-profile", {
        ...details,
        userId: user?._id,
      })
      .then((res) => {
        message.success(res.data.message);
        alert(res.data.message);
      })
      .catch((error) => {
        message.error(error);
      });
  };
  function validateFile() {
    var fileInput = document.getElementById('fileInput');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.pdf)$/i;
    if (!allowedExtensions.exec(filePath)) {
      alert('Please upload a PDF file only.');
      fileInput.value = '';
      return false;
    }
  }

  return (
    <Card className="col-md-10 col-sm-11 col-12 mx-auto py-3 px-2 my-5">
      <h4>Create Profile</h4>
      <Form
        onFinish={onFinish}
        layout={"vertical"}
        className="d-flex justify-content-between flex-wrap"
      >
        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: "Please input your name!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input your email!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          name={"dob"}
          label="Date of Birth"
          
          rules={[{ required: true, message: "Please input your DOB!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <DatePicker format={"DD-MM-YYYY"} disabledDate={disabledDate}/>
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone No"
          onInput = {(e) =>{
    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
  }}
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: "Please input your address!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item
          label="profile photo"
          rules={[{ required: true, message: "Please input your photo!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
          required
        >
          <FileBase64
            multiple={false}
            onDone={({ base64 }) =>
              setDetails({ ...details, photourl: base64 })
            }
          />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please input your gender!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <Radio.Group>
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
          </Radio.Group>
        </Form.Item>
        
        <Form.Item
          name="class10th"
          label="10th %"
          rules={[{ required: true, message: "Please input your 10th %!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="class12th"
          label="12th %"
          rules={[{ required: true, message: "Please input your 12th %!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="branch"
          label="Branch"
          rules={[{ required: true, message: "Please input your branch!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <Select>
            <Select.Option value="BSC IT">
              BSC IT
            </Select.Option>
            <Select.Option value="BCOM">BCOM</Select.Option>
            <Select.Option value="BA">
              BA
            </Select.Option>
            <Select.Option value="BSC BT">
              BSC BT
            </Select.Option>
            <Select.Option value="BAF">
              BAF
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="division"
          label="Division"
          rules={[{ required: true, message: "Please input your division!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <Select>
            <Select.Option value="A">A</Select.Option>
            <Select.Option value="B">B</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="percent"
          label="Overall %"
          rules={[{ required: true, message: "Please input your %!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="Aggrpercent"
          label="Aggregate CGPA"
          rules={[{ required: true, message: "Please input your cgpa!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="liveKt"
          label="Live KT"
          rules={[{ required: true, message: "Please input your kt!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2">
          <Select>
            <Select.Option value="Yes">Yes</Select.Option>
            <Select.Option value="No">No</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item onChange={handleFileChange} 
          label="upload resume"
          rules={[{ required: true, message: "Please input your resume!" }]}
          className="col-md-3 col-sm-5 col-10 mx-2"
        >
          <FileBase64 
            multiple={false} 
            onDone={({ base64 }) => setDetails({ ...details, resume: base64 })}
          />
        </Form.Item>

        <div className="col-12 text-center">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default CreateProfile;
