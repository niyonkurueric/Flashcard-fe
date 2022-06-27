import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Sidebar from '../component/Sidebar'
import Grid from '@mui/material/Grid';
import { useQuery, gql } from '@apollo/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import DrawerAppBar from '../component/Navbar';

const CARDS_QUERY = gql`
query{
  getAllCard{
    question
    answer
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
  const { data } = useQuery(CARDS_QUERY);
  // useEffect(() => {
  //   const { data } = useQuery(CARDS_QUERY_OUNNER);
  // }, [data]);
  return (
    <>
      <DrawerAppBar />
      <Box sx={{ display: 'flex' }}>
        <Grid container spacing={5} sx={{ margin: "80px 0 0 100px" }} >
          {data && (
            <>
              {data.getAllCard.map((card: any) => (
                <Card sx={{ maxWidth: 345, marginTop: "20px", marginRight: "20px" }} >
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {card.question}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
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