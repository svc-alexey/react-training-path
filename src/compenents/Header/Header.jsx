import React from "react";
import s from './Header.module.css';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import AppsIcon from '@material-ui/icons/Apps';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PolymerIcon from '@material-ui/icons/Polymer';
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import { makeStyles, createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         borderRadius: 3,
//         border: 0,
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     },
//     label: {
//         textTransform: 'capitalize',
//     },
// });

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    overrides: {
        contrastText: '#fff',
        MuiButton: {
            contrastText: '#fff',
            raisedPrimary: {
                color: '#fff',
                contrastText: '#fff',
            },
        },
    }
});

const Header = () => {
    // const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <Grid item xs={12} container direction='row'  alignItems="center"  id={s.header}>
            <Grid item xs={3} container direction='row' className={s.headerLogo}>
                <PolymerIcon/>
                <Typography>
                    Social New
                </Typography>
            </Grid>
            <Grid item xs={3} container alignItems="center" className={s.headerInput}>
                <SearchIcon/>
                <input type="text" placeholder={'Search friends, photo, video and other ...'}/>
            </Grid>
            <Grid item xs={3}  container alignItems="center"  justify="center">
                <Button variant={"contained"} color={"primary"} >Button</Button>
                <Button disableRipple >Socondary</Button>
            </Grid>
            <Grid  item xs={3} className={s.headerIcon}>
                <AppsIcon/>
                <ChatIcon/>
                <NotificationsIcon/>
                <AccountCircleIcon/>
            </Grid>
        </Grid>
        </ThemeProvider>
    );
}

export default Header;