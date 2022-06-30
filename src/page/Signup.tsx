import React, { useState } from "react";
import Buttons from "../component/Button";
import Inputs from "../component/Input";
import DrawerAppBar from "../component/Navbar";
import { Box, Typography } from "@mui/material";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Card from "@mui/material/Card";
const CREATE_USER_MUTATION = gql`
  mutation SignupMutation(
    $names: String!
    $password: String!
    $email: String!
  ) {
    Signup(email: $email, names: $names, password: $password) {
      token
      user {
        names
      }
    }
  }
`;

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [names, setNames] = useState("");
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const onhandChangeNames = (e: any) => {
    setNames(e.target.value);
  };
  const onhandChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const [createUser] = useMutation(CREATE_USER_MUTATION, {
    onError: (error) => {
      toast.error(error.message);
    },
    onCompleted: (createUser) => {
      toast.success("Registration Successful");
      localStorage.setItem("auth", createUser.Signup.token);
      navigate("/adminpanel");
    },
    variables: {
      names: names,
      password: password,
      email: email,
    },
  });
  const onsubmit = async (e: any) => {
    e.preventDefault();
    if (names === "") {
      toast.error("full name is required");
    } else if (password === "") {
      toast.error("password is required");
    } else if (email === "") {
      toast.error("password is required");
    } else {
      await createUser();
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
          margin: "150px 20px",
          background: "F8F9FA",
          justifyContent: "space-evenly",
        }}
      >
        <Card
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
            SIGNUP
          </Typography>
          <form onSubmit={onsubmit}>
            <Inputs
              label={"Fullname"}
              sx={{
                width: 420,
                height: 50,
                margin: "20px 0px 0px 16px",
              }}
              type={"text"}
              value={names}
              onchange={onhandChangeNames}
            />
            <Inputs
              label={"Email"}
              sx={{
                width: 420,
                height: 50,
                margin: "20px 0px 0px 16px",
              }}
              type={"email"}
              value={email}
              onchange={onhandChangeEmail}
            />
            <Inputs
              label={"Password"}
              sx={{
                width: 420,
                height: 50,
                margin: "20px 0px 0px 16px",
              }}
              type={"password"}
              value={password}
              onchange={handleChangePassword}
            />
            <Buttons
              value={"Signup"}
              sx={{
                width: {
                  xs: 280,
                  sm: 430,
                },
                height: 50,
                margin: {
                  xs: "2px 5px",
                  sm: "20px 10px",
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
        </Card>
      </Box>
    </>
  );
}
