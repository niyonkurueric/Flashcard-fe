import React from 'react'
import Buttons from '../component/Button'
import Inputs from '../component/Input'
import DrawerAppBar from '../component/Navbar';
import { Box,Typography } from '@mui/material';
export default function Signup() {
  return (
    <>
    <DrawerAppBar/>
    <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          margin: '150px 20px',
          background: 'F8F9FA',
          justifyContent: 'space-evenly',
        }}>
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
            SIGNUP
          </Typography>
      <Inputs value={'Fullname'} sx={{
              width:430,
              height: 50,
              marginTop:5
            }} />
        <Inputs value={'Email'} sx={{
              width:430,
              height: 50,
               marginTop:30
            }} />
            <Inputs value={'Password'} sx={{
              width:430,
              height: 50,
              marginTop:30
            }} />
      <Buttons value={'Signup'}
            sx={{
              width: {
                xs: 280,
                sm: 430,
              },
              height: 50,
              margin: {
                xs: '100px 0px',
                sm: '20px 0px',
              },
              backgroundColor: '#00095E',
              fontSize: '18px',
              color: 'white', 
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#00095E',
              },
            }}/>
          </Box>
        </Box>
</>
  )
}