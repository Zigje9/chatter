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
        <Route path="http://www.chatter.kro.kr/main" component={MainView} />
        <Redirect from="*" to="http://www.chatter.kro.kr/main" />
      </Switch>
    </>
  );

  const unAuthorizedRouter = (
    <>
      <Route path="http://www.chatter.kro.kr/login" component={LoginView} />
      <Redirect from="*" to="http://www.chatter.kro.kr/login" />
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
