import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Sidebar from "../component/Sidebar";
import Grid from "@mui/material/Grid";
import { useQuery, useMutation, gql } from "@apollo/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import CircularProgress from "@mui/material/CircularProgress";

const Line = styled("div")(({ theme }) => ({
  position: "absolute",
  backgroundColor: "lightblue",
  width: "285px",
  height: "7px",
  marginTop: "40px",
  borderRadius: "30px",
  zIndex: 0,
  "@media(max-width:900px)": {
    left: "31.5%",
  },
  "@media(max-width:400px)": {
    left: "13%",
  },
}));
const CARDS_QUERY_OUNNER = gql`
  query {
    getOwnCards {
      question
      answer
      id
    }
  }
`;
const DELETE_CARDS_MUTATION = gql`
  mutation ($id: Int!) {
    deleteCard(id: $id)
  }
`;

function AdminPanel() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flippedCard, setFlippedCard] = useState(0);
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const { refetch, loading, data } = useQuery(CARDS_QUERY_OUNNER);

  const [deleteCardMutation] = useMutation(DELETE_CARDS_MUTATION, {
    onCompleted: () => {
      toast.success("well deleted");
    },
    variables: {
      id: id,
    },
  });
  const navigationUpdate = (id: number) => {
    navigate(`/updateCard/${id}`, { state: { id } });
  };

  const flipCard = (id: number, e: any) => {
    setIsFlipped(!isFlipped);
    setFlippedCard(id);
  };

  const deleteCard = async (e: any, id: number) => {
    e.preventDefault();
    setId(id);
    console.log(id);
    await deleteCardMutation();
    refetch();
  };
  useEffect(() => {
    refetch();
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Grid container spacing={5} sx={{ margin: "80px 0 0 100px" }}>
        <Grid
          container
          spacing={5}
          sx={{ margin: "10px 0 0 0" }}
          textAlign="center"
        >
          <Typography
            variant="h4"
            fontSize={30}
            className="p"
            fontFamily="Josefin Sans, sans-serif"
            fontWeight={900}
            color="#00095E"
          >
            Owner Flash Cards
          </Typography>
          <Line />
        </Grid>
        {loading ? (
          <CircularProgress sx={{ margin: 30 }} />
        ) : (
          <>
            {data.getOwnCards.map((card: any) => (
              <Card
                onClick={(e) => flipCard(card.id, e)}
                sx={{ maxWidth: 345, marginTop: "20px", marginRight: "20px" }}
              >
                <ReactCardFlip isFlipped={isFlipped && flippedCard === card.id}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Question
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.question}
                    </Typography>

                    <CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          color="error"
                          onClick={(e) => deleteCard(e, card.id)}
                        >
                          Delete
                        </Button>
                        <CardActions>
                          {" "}
                          <Button
                            size="small"
                            variant="contained"
                            onClick={() => navigationUpdate(card.id)}
                          >
                            Update
                          </Button>
                        </CardActions>
                      </CardActions>
                    </CardContent>
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Answer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.answer}
                    </Typography>
                  </CardContent>
                </ReactCardFlip>
              </Card>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
}
export default AdminPanel;
