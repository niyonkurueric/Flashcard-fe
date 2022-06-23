import React ,{useState} from 'react'
import {useNavigate } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Link from '@material-ui/core/Link'; 
import Buttons from '../component/Button'
import Inputs from '../component/Input'
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
function AdminPanel() {
const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleChangePassword=(e:any)=>{
  setPassword(e.target.value)
 }
 const onhandChangeEmail=(e:any)=>{
  setEmail(e.target.value)
 }
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
const token= localStorage.getItem("auth")
if(!token)
{
   navigate("/login");
}


const onsubmit=async(e:any)=>{
   e.preventDefault()
}
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <InboxIcon /> 
                </ListItemIcon>
                <Link href="adminpanel"><ListItemText primary={"Dashbord"}sx={{ opacity: open ? 1 : 0 }} /></Link>
              </ListItemButton>
            </ListItem>

 <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <InboxIcon /> 
                </ListItemIcon>
               <ListItemText primary={"Create Card"}sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

        <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Dashbord"}sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

        </List>
        <Divider />
      </Drawer>
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
          Create New card
          </Typography>
          <form onSubmit={onsubmit}>
        <Inputs label={'question'} sx={{
              width:420,
              height: 50,
              margin:"20px 0px 0px 16px"
               
            }} 
             type={'text'}
            value={email}
            onchange={onhandChangeEmail}/>
            <Inputs label={'answer'} sx={{
              width:420,
              height: 50,
              margin:"20px 0px 0px 16px"
            }} 
             type={'text'}
            value={password}
            onchange={handleChangePassword}
            />
      <Buttons value={'Create new card'}
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
            }}/>
            </form>
          </Box>
        </Box>







      </Box>
    </Box>
  )
}

export default AdminPanel