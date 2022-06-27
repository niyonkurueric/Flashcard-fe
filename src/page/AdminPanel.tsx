import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Sidebar from "../component/Sidebar";
import Grid from "@mui/material/Grid";
import { useQuery, useMutation, gql } from "@apollo/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

function AdminPanel() {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const { data } = useQuery(CARDS_QUERY_OUNNER);
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
  const deleteCard = async (e: any, id: number) => {
    e.preventDefault();
    setId(id);
    console.log(id);
    await deleteCardMutation();
  };
  // useEffect(() => {
  //   const { data } = useQuery(CARDS_QUERY_OUNNER);
  // }, [data]);
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Grid container spacing={5} sx={{ margin: "80px 0 0 100px" }}>
        {data && (
          <>
            {data.getOwnCards.map((card: any) => (
              <Card
                sx={{ maxWidth: 345, marginTop: "20px", marginRight: "20px" }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Question
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.question}
                    </Typography>
                  </CardContent>
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
                </CardActionArea>
              </Card>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
}
export default AdminPanel;
