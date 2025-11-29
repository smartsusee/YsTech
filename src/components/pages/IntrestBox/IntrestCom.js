import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { NavbarWithMegaMenu } from "../Navbar/Navbar";

const IntrestCom = () => {
  return (
    <>
      <NavbarWithMegaMenu />
      <Card
        color="transparent"
        shadow={false}
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          action="https://formsubmit.co/ystechsolution@gmail.com"
          method="POST"
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          {/* FormSubmit Basic Settings */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Lead From Your Website"
          />
          <input type="hidden" name="_template" value="table" />

          {/* Redirect directly with success=true */}
          <input
            type="hidden"
            name="_next"
            value={`${window.location.origin}/?success=true`}
          />

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white">
              Your Name
            </Typography>
            <Input
              id="num"
              type="text"
              name="name"
              placeholder="Enter name"
              required
            />

            <Typography variant="h6" color="white">
              Your Email
            </Typography>
            <Input
              type="email"
              name="email"
              placeholder="E-mail@mail.com"
              required
              id="num"
            />

            <Typography variant="h6" color="white">
              Your Contact No
            </Typography>
            <Input
              type="text"
              id="num"
              name="contact"
              maxLength="10"
              inputMode="numeric"
              pattern="[0-9]{10}"
              placeholder="Enter number"
              required
            />
          </div>

          <Button className="mt-6" fullWidth type="submit">
            sign up
          </Button>
        </form>
      </Card>
    </>
  );
};

export default IntrestCom;
