import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GlobalStyle from './components/Common/globalStyle';
import LoginView from './pages/LoginView';
import MainView from './pages/MainView';

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);

  const serviceRouter = (
    <>
      <Switch>
        <Route path="/main" component={MainView} />
        <Redirect from="*" to="/main" />
      </Switch>
    </>
  );

  const unAuthorizedRouter = (
    <>
      <Route path="/login" component={LoginView} />
      <Redirect from="*" to="/login" />
    </>
  );

  return (
    <>
      <BrowserRouter>
        {isLogin ? serviceRouter : unAuthorizedRouter}
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
