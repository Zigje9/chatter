import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/Common/globalStyle';
import LoginView from './pages/LoginView';
import MainView from './pages/MainView';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginView}></Route>
          <Route path="/main" component={MainView}></Route>
          <Redirect from="*" to="/main"></Redirect>
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
