import './App.css';
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes,Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
//import Homepage from './Pages/HomePage';
//import CoinPage from './Pages/CoinPage';
import Alert from "./components/Alert";

const Homepage = React.lazy(() => import('./Pages/HomePage'));
const CoinPage = React.lazy(() => import('./Pages/CoinPage'));



function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element = {<Homepage />} exact />
            <Route path='/coins/:id' element = { <CoinPage />} />
          </Routes>
        </Suspense>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
