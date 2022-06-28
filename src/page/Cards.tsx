import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { useQuery, gql } from "@apollo/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DrawerAppBar from "../component/Navbar";
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
const CARDS_QUERY = gql`
  query {
    getAllCard {
      question
      answer
      id
    }
  }
`;

function Cards() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flippedCard, setFlippedCard] = useState(0);
  const { data } = useQuery(CARDS_QUERY);
  const flipCard = (id: number, e: any) => {
    setIsFlipped(!isFlipped);
    setFlippedCard(id);
  };
  // useEffect(() => {
  //   const { data } = useQuery(CARDS_QUERY_OUNNER);
  // }, [data]);
  return (
    <>
      <DrawerAppBar />
      <Box sx={{ display: "flex" }}>
        <Grid container spacing={5} sx={{ margin: "80px 0 0 100px" }}>
          <Grid container spacing={5} sx={{ margin: "50px 0 0 500px" }}>
            <Typography
              variant="h4"
              fontSize={30}
              className="p"
              fontFamily="Josefin Sans, sans-serif"
              fontWeight={900}
              color="#00095E"
            >
              Public FlashCards
            </Typography>
            <Line />
          </Grid>
          {!data ? (
            <CircularProgress sx={{ margin: 30 }} />
          ) : (
            <>
              {data.getAllCard.map((card: any) => (
                <Card
                  onClick={(e) => flipCard(card.id, e)}
                  sx={{ maxWidth: 345, marginTop: "20px", marginRight: "20px" }}
                >
                  <ReactCardFlip
                    isFlipped={isFlipped && flippedCard === card.id}
                  >
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {card.question}
                      </Typography>
                    </CardContent>

                    <CardContent>
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
    </>
  );
}
export default Cards;
