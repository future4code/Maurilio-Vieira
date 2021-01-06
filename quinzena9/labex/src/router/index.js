import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { CssBaseline } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import ApplicationPage from '../pages/ApplicationPage';
import CreateTripPage from '../pages/CreateTripPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import TripDetailPage from '../pages/TripDetailPage';
import TripsListPage from '../pages/TripsListPage';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

const Router = () => {
  return (
    <BrowserRouter>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CssBaseline />
        <AppContainer>
          <Switch>
            <Route path="/viagens/criar">
              <CreateTripPage />
            </Route>
            <Route path="/viagens/detalhe/:tripId">
              <TripDetailPage />
            </Route>
            <Route path="/viagens">
              <TripsListPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/inscricao">
              <ApplicationPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </AppContainer>
      </MuiPickersUtilsProvider>
    </BrowserRouter>
  )
}

export default Router;