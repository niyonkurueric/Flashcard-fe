import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Sidebar from '../component/Sidebar'

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Buttons from '../component/Button'
import Inputs from '../component/Input'
import { useMutation, gql } from '@apollo/client';

const CREATE_CARDS_MUTATION = gql`
  mutation SignupMutation(
    $names:String!
    $password:String!
    $email:String!
  )
  {
  creatNewCard(question:$question,answer:$answer){
    token
    user{
      names
    }
  }
}
`;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
function Update() {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleChangeAnswer = (e: any) => {
    setAnswer(e.target.value)
  }
  const onhandChangeQuestion = (e: any) => {
    setQuestion(e.target.value)
  }
  const onsubmit = async (e: any) => {
    e.preventDefault()
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

        <DrawerHeader />
        <Box>
          <Box
            sx={{
              width: { xs: 300, sm: 460 },
              minHeight: { xs: 350, sm: 650, md: 650, lg: 350 },
              backgroundColor: '#EBF2FA',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 2,
              padding: '10px 0px',
              margin: '0px 20px',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: '35px',
                fontWeight: '600',
                color: '#00095E',
                fontFamily: 'Robot, sans-serif',
                paddingTop: '20px',
                paddingBottom: '10px',
              }}
            >
              Update Card
            </Typography>
            <form onSubmit={onsubmit}>
              <Inputs label={'question'} sx={{
                width: 420,
                height: 50,
                margin: "20px 0px 0px 16px"
              }}
                type={'text'}
                value={question}
                onchange={onhandChangeQuestion} />
              <Inputs label={'answer'} sx={{
                width: 420,
                height: 50,
                margin: "20px 0px 0px 16px"
              }}
                type={'text'}
                value={answer}
                onchange={handleChangeAnswer}
              />
              <Buttons value={'Update'}
                sx={{
                  width: {
                    xs: 280,
                    sm: 430,
                  },
                  height: 50,
                  margin: {
                    xs: '0px 5px',
                    sm: '20px 10px',
                  },
                  backgroundColor: '#00095E',
                  fontSize: '18px',
                  color: 'white',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#00095E',
                  },
                }} />
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Update