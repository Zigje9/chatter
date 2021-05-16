import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/Common/globalStyle';
import LoginView from './pages/LoginView';

function App() {
  // const defaultRouter = (
  //   <>
  //     <Route path="/login" component={LoginView}></Route>
  //     <Redirect from="*" to="/login"></Redirect>
  //   </>
  // );

  // const userRouter = (
  //   <>
  //     <Switch>
  //       <Route exact path="/login" component={LoginView}></Route>
  //     </Switch>
  //   </>
  // );

  return (
    <>
      <BrowserRouter>
        {/* {user ? userRouter : defaultRouter} */}
        <Switch>
          <Route exact path="/login" component={LoginView}></Route>
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
