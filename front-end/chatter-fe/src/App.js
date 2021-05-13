import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/Common/globalStyle';
import LoginView from './pages/LoginView';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginView}></Route>
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
