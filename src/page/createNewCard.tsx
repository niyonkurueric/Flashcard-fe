import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Buttons from "../component/Button";
import Inputs from "../component/Input";
import Sidebar from "../component/Sidebar";
import { useMutation, gql } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
const CREATE_CARDS_MUTATION = gql`
  mutation SignupMutation($question: String!, $answer: String!) {
    creatNewCard(question: $question, answer: $answer) {
      question
      answer
    }
  }
`;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
function CreateNewCard() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleChangeAnswer = (e: any) => {
    setAnswer(e.target.value);
  };
  const onhandChangeQuestion = (e: any) => {
    setQuestion(e.target.value);
  };
  const [createCard] = useMutation(CREATE_CARDS_MUTATION, {
    onCompleted: (createCard) => {
      toast.success("well created");
    },
    variables: {
      question: question,
      answer: answer,
    },
  });

  const onsubmit = async (e: any) => {
    e.preventDefault();
    const formName: any = document.getElementById("formname");
    if (question === "") {
      toast.error("Question is required");
    } else if (answer === "") {
      toast.error("Answer is required");
    } else {
      if (await createCard()) {
        setInterval(function () {
          navigate("/adminpanel");
        }, 2000);
      }
    }

    formName.reset();
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Toaster />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box>
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
              margin: "0px 400px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#00095E",
                fontFamily: "Robot, sans-serif",
                paddingTop: "20px",
                paddingBottom: "10px",
              }}
            >
              CREATE FLASHCARD
            </Typography>
            <form onSubmit={onsubmit} id="formname">
              <Inputs
                label={"question"}
                sx={{
                  width: 420,
                  height: 50,
                  margin: "20px 0px 0px 16px",
                }}
                type={"text"}
                value={question}
                onchange={onhandChangeQuestion}
              />
              <Inputs
                label={"answer"}
                sx={{
                  width: 420,
                  height: 50,
                  margin: "20px 0px 0px 16px",
                }}
                type={"text"}
                value={answer}
                onchange={handleChangeAnswer}
              />

              <Buttons
                value={"CREATE"}
                sx={{
                  width: {
                    xs: 280,
                    sm: 430,
                  },
                  height: 50,
                  margin: {
                    xs: "0px 5px",
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
      </Box>
    </Box>
  );
}

export default CreateNewCard;
