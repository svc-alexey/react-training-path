import React from 'react';
import './App.css';
import s from './App.css'
import 'fontsource-roboto';
import '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Header from "./compenents/Header/Header";
import NavBar from "./compenents/NavBar/NavBar";
import Profile from "./compenents/Profile/Profile";
import Dialogs from "./compenents/Dialogs/Dialogs";
import News from "./compenents/News/News";
import Music from "./compenents/Music/Music";
import Settings from "./compenents/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


export default function App() {

    return (
        <div className={s.root}>
            <Grid container spacing={3} >
                <Header/>
            </Grid>
        </div>
    );
}

// const App = () => {
//     return (
//         <BrowserRouter>
//             <div className={'app-wrapper'}>
//                 <Header/>
//                 <NavBar/>
//                 <div className="app-wrapper-content">
//                     <Route path='/dialogs' component={Dialogs}/>
//                     <Route path='/profile' component={Profile}/>
//                     <Route path='/news' component={News}/>
//                     <Route path='/music' component={Music}/>
//                     <Route path='/settings' component={Settings}/>
//                 </div>
//             </div>
//         </BrowserRouter>
//     );
// }

// export default App;
