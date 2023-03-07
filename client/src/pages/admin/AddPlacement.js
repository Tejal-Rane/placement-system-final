import React, { useRef, useState, useEffect } from "react";
import JoditEditor from "jodit-react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { message } from "antd";
import FileBase64 from "react-file-base64";

const AddPlacement = () => {
  const editor = useRef("");
  const [checked, setChecked] = useState(false);
  const [branches, setBranches] = useState([]);
  const [con, setCon] = useState({
    companyName: "",
    driveDate: "",
    editorData: "",
    branchcriteria: [],
    jdfile: "",
    AggrrpercentCriteria: "",
  });

  const today = new Date().toISOString().slice(0, 10);//set date to today

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

  const handleBranchChange = (e) => {
    const index = branches.indexOf(e.target.value);
    if (index === -1) {
      setBranches([...branches, e.target.value]);
    } else {
      setBranches(branches.filter((branch) => branch !== e.target.value));
    }
  };

  const handleSubmit = async (e) => {
    console.log(branches);
    e.preventDefault();

    con.jdfile &&
      (await axios
        .post("/api/v1/admin/add-placement", {
          ...con,
          branchcriteria: branches,
        })
        .then((res) => {
          message.success(res.data.message);
          setCon({
            companyName: "",
            driveDate: "",
            editorData: "",
            jdfile: "",
            branchcriteria: [],
          });
        })
        .catch((err) => {
          message.error(err.response.data.message);
          setCon({
            companyName: "",
            driveDate: "",
            editorData: "",
            jdfile: "",
            branchcriteria: [],
          });
        }));
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="col-md-8 mx-auto add-drive-form "
        encType="multipart/form-data"
      >
        <Typography variant="h4" className="my-4">
          Add Placement Drive
        </Typography>
        <div className="d-flex justify-content-between flex-wrap">
          <TextField
            id="standard-basic"
            variant="outlined"
            label="company name"
            className="col-md-5 col-12 my-2"
            name="companyName"
            value={con.companyName}
            placeholder="Enter company name.."
            onChange={(e) => setCon({ ...con, companyName: e.target.value })}
          />
          <TextField
            id="date"
            label="Drive date"
            name="driveDate"
            value={con.driveDate}
            onChange={(e) => setCon({ ...con, driveDate: e.target.value })}
            type="date"
            defaultValue="2022-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
            inputProps: {
            min: today,
          },
        }}
            variant="outlined"
            className="col-md-5 col-12 my-2"
          />
        </div>
        <JoditEditor
          config={{ height: 400 }}
          ref={editor}
          value={con.editorData}
          tabIndex={1}
          onBlur={(newContent) => setCon({ ...con, editorData: newContent })}
          onChange={(newContent) => {}}
        />

        <FileBase64 onChange={validateFile}
          multiple={false}
          onDone={({ base64 }) => setCon({ ...con, jdfile: base64 })}
          className="col-md-5 col-12 my-3"
        />

        <hr />
        <br />
        <h4>Criteria Form:</h4>
        <Typography>pick the candidates who can aply</Typography>
        <FormGroup>
          {["BSC IT", "BSC BT", "BSC", "BCOM", "BA"].map((branch, i) => (
            <FormControlLabel
              control={<Checkbox />}
              label={branch}
              value={branch}
              checked={branches.includes(branch)}
              onChange={handleBranchChange}
            />
          ))}
        </FormGroup>
        <TextField
          type={"number"}
          variant="outlined"
          label=" Aggr % Criteria"
          name="AggrrpercentCriteria"
          value={con.AggrrpercentCriteria}
          className="col-md-5 col-12 my-3"
          onChange={(e) =>
            setCon({ ...con, AggrrpercentCriteria: e.target.value })
          }
        />
        <br />
        {
          <Button
            className="text-center me-3 w-30"
            type="submit"
            variant="contained"
            color="primary"
          >
            Add Drive
          </Button>
        }
        <Button variant="contained" color="secondary">
          Clear
        </Button>
      </form>
    </>
  );
};

export default AddPlacement;
