import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import About from './pages/About';
import Page404 from './pages/404';
import HomePage from './pages/Homepage';
import MenuComponent from './pages/MenuComponent';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/MenuApp" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        
        <Route path="/menu" exact> 
        <MenuComponent/>
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;