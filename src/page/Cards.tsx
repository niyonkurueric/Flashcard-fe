import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useQuery, gql } from '@apollo/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import DrawerAppBar from '../component/Navbar';
import ReactCardFlip from 'react-card-flip';
import CircularProgress from '@mui/material/CircularProgress';
const CARDS_QUERY = gql`
query{
  getAllCard{
    question
    answer
    id
  }
}`

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

function Cards() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flippedCard, setFlippedCard] = useState(0);
  const { data } = useQuery(CARDS_QUERY);
  const flipCard = (id: number, e: any) => {
    setIsFlipped(!isFlipped)
    setFlippedCard(id)
  }
  // useEffect(() => {
  //   const { data } = useQuery(CARDS_QUERY_OUNNER);
  // }, [data]);
  return (
    <>
      <DrawerAppBar />
      <Box sx={{ display: 'flex' }}>
        <Grid container spacing={5} sx={{ margin: "80px 0 0 100px" }} >
          <Grid container spacing={5} sx={{ margin: "50px 0 0 500px" }}>
            <Typography variant="body2" color="text.secondary" sx={{ alignItems: 'center', color: '#00095E', }}>
              PUBLIC CARDS
            </Typography>
          </Grid>
          {!data ? <CircularProgress sx={{ margin: 30 }} /> : (
            <>
              {data.getAllCard.map((card: any) => (
                <Card onClick={(e) => flipCard(card.id, e)} sx={{ maxWidth: 345, marginTop: "20px", marginRight: "20px" }}>
                  <ReactCardFlip isFlipped={(isFlipped && flippedCard === card.id)}>
                    <CardContent >
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
  )
}
export default Cards 