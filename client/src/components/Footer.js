import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core";
import "../styles/footer.css";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-upSide">
          <div className="container col-md-6 col-lg-8">
            <Card
              className="footer-card"
              style={{ border: "none", boxShadow: "none" }}
            >
              <CardContent>
                <Typography>KET'S V.G. VAZE COLLEGE</Typography>
                <Typography>
                  <a href="https://vazecollege.net/">Visit Us</a>
                </Typography>
                <Typography>
                  <a href="Contact">Contact Us</a>
                </Typography>
              </CardContent>
            </Card>

      
            <Card
              className="footer-card"
              style={{ border: "none", boxShadow: "none" }}
            >
              <CardContent>
               
                <Typography>
                  <strong>Office Timings</strong>: 10.00am to 2.00pm
                </Typography>
                <Typography>
                  <strong>Telephone Extension</strong>: 1801
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="footer-rightSide">
            <FaFacebook className="sicon" />
            <FaInstagram className="sicon" />
            <FaTwitter className="sicon" />
            <FaYoutube className="sicon" />
          </div>
        </div>

       
        <div className="footer-bottom">
          <hr
            style={{
              background: "white",
              color: "white",
              borderColor: "white",
              height: "5px",
              width: "95%",
              margin: "auto",
            }}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
