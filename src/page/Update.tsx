import React, { useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "../component/Sidebar";

import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Buttons from "../component/Button";
import Inputs from "../component/Input";
import { useQuery, useMutation, gql } from "@apollo/client";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const GET_ONE_CARD = gql`
  query ($id: Int!) {
    getOneCard(id: $id) {
      question
      answer
    }
  }
`;

const UPDATE_CARDS_MUTATION = gql`
  mutation updateMutation($question: String!, $answer: String!, $id: Int!) {
    UpdateCard(question: $question, answer: $answer, id: $id) {
      question
      answer
      id
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
function Update() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { id } = useParams();
  const paramsId: any = id;
  const Id = parseInt(paramsId);
  const { data } = useQuery(GET_ONE_CARD, {
    variables: { id: Id },
    onCompleted: (data) => {
      setQuestion(data.getOneCard.question);
      setAnswer(data.getOneCard.answer);
    },
  });

  const handleChangeAnswer = (e: any) => {
    setAnswer(e.target.value);
  };
  const onhandChangeQuestion = (e: any) => {
    setQuestion(e.target.value);
  };

  const [UpdateCard] = useMutation(UPDATE_CARDS_MUTATION, {
    onCompleted: (UpdateCard) => {
      toast.success("Registration Successful");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    variables: {
      question: question,
      answer: answer,
      id: Id,
    },
  });
  const onsubmit = async (e: any) => {
    e.preventDefault();
    await UpdateCard();
    await navigate("/adminpanel");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box>
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
              Update Card
            </Typography>
            {!data ? (
              <CircularProgress sx={{ margin: 30 }} />
            ) : (
              <form onSubmit={onsubmit}>
                <>
                  <Inputs
                    label={"card.question"}
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
                    label={"card.question"}
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
                    value={"Update"}
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
                </>
              </form>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Update;
