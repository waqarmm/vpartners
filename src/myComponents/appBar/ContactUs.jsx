import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ImgOne from "../appBar/assets/imgo.jpg";
import ImgTwo from "../appBar/assets/imgtow.jpg";
import "../appBar/ContactUs.css";
import Footer from "../footer";
import FAQ from "../FAQ";
import AnnouncementBar from "../Annoucement-bar/AnnouncementBar";

const ContactUs = () => {
  return (
    <>
        <AnnouncementBar/>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: "lighter", marginTop: "50px" }}>CONTACT</h1>
        <p style={{ fontWeight: "lighter", marginTop: "20px" }}>
          Do you have questions? Call, email or visit us for a no-obligation
          consultation in one of our showrooms.
        </p>
        <div
          className="con-card"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Card
            className="contact-card-one"
            style={{
              width: "48%",
              backgroundColor: "#f5f5f5",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ height: "350px", overflow: "hidden" }}>
              <img
                src={ImgOne}
                alt="Contact"
                style={{
                  marginTop: "30px",
                  height: "90%",
                  width: "90%",
                  objectFit: "cover",
                }}
              />
            </div>
            <CardContent style={{ flex: "1" }}>
              <Typography variant="body2" color="textSecondary" component="p">
                <h3 className="yu">farhan durrani designation</h3>
                <p>+971-50-819-4493</p>
                <p>visionarypartnersUAE.com</p>
                <p>info@visionarypartnersUAE.com</p>
                <p>Warehouse #45,Near China Mall Al jurf,Ajman,UAE</p>
              </Typography>
            </CardContent>
          </Card>
          <Card
            className="contact-card-two"
            style={{
              width: "48%",
              backgroundColor: "#f5f5f5",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ height: "350px", overflow: "hidden" }}>
              <img
                src={ImgTwo}
                alt="Contact"
                style={{
                  marginTop: "30px",
                  height: "90%",
                  width: "90%",
                  objectFit: "cover",
                }}
              />
            </div>
            <CardContent style={{ flex: "1" }}>
              <Typography variant="body2" color="textSecondary" component="p">
                <h3 className="yu">farhan durrani designation</h3>
                <p>+971-50-819-4493</p>
                <p>visionarypartnersUAE.com</p>
                <p>info@visionarypartnersUAE.com</p>
                <p>Warehouse #45,Near China Mall Al jurf,Ajman,UAE</p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bbb"></div>
      <FAQ />

      <div className="aaa"></div>
      <Footer />
    </>
  );
};

export default ContactUs;
