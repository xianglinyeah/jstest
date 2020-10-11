import React from 'react';
import Admin from "./admin";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Detail from "./pagpes/Detail";
import Login from "./pagpes/Login";
import Home from "./pagpes/Home";




function App() {
  return (
      <BrowserRouter>

          <Route path='/' exact component={Admin}></Route>
          <Route path='/detail' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>

      </BrowserRouter>
  );
}

export default App;
