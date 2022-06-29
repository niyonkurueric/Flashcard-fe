import React, { useState } from "react";
import Buttons from "../component/Button";
import Inputs from "../component/Input";
import DrawerAppBar from "../component/Navbar";
import { Box, Typography } from "@mui/material";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const CREATE_LOGIN_MUTATION = gql`
  mutation loginMutation($password: String!, $email: String!) {
    login(email: $email, password: $password) {
      token
      user {
        names
      }
    }
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const onhandChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const [loginUser] = useMutation(CREATE_LOGIN_MUTATION, {
    onCompleted: (loginUser) => {
      localStorage.setItem("auth", loginUser.login.token);
      navigate("/adminpanel");
    },
    variables: {
      password: password,
      email: email,
    },
  });
  const onsubmit = async (e: any) => {
    e.preventDefault();
    if (email == "") {
      toast.error("email is required");
    } else if (password == "") {
      toast.error("password is required");
    } else {
      await loginUser();
    }
  };
  return (
    <>
      <Toaster />
      <DrawerAppBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          margin: "100px 20px",
          background: "F8F9FA",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            width: { xs: 300, sm: 460 },
            minHeight: { xs: 350, sm: 650, md: 650, lg: 350 },
            backgroundColor: "#EBF2FA",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 2,
            padding: "10px 0px",
            margin: "0px 20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "35px",
              fontWeight: "600",
              color: "#00095E",
              fontFamily: "Robot, sans-serif",
              paddingTop: "20px",
              paddingBottom: "10px",
            }}
          >
            Login
          </Typography>
          <form onSubmit={onsubmit}>
            <Inputs
              label={"Email"}
              sx={{
                width: 430,
                height: 50,
                marginTop: 5,
              }}
              type={"email"}
              value={email}
              onchange={onhandChangeEmail}
            />
            <Inputs
              label={"Password"}
              sx={{
                width: 430,
                height: 50,
                marginTop: 30,
              }}
              type={"password"}
              value={password}
              onchange={handleChangePassword}
            />

            <Buttons
              value={"Login"}
              sx={{
                width: {
                  xs: 280,
                  sm: 430,
                },
                height: 50,
                margin: {
                  xs: "50px 0px",
                  sm: "20px 0px",
                },
                backgroundColor: "#00095E",
                fontSize: "18px",
                color: "white",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#00095E",
                },
              }}
            />
          </form>
        </Box>
      </Box>
    </>
  );
}
