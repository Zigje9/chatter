import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginView from './pages/LoginView';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginView}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
