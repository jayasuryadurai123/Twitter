import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import FirstPage from './Components/FirstPage';
import {Switch,Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact>
        <FirstPage />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      </Switch>
      {/* <FirstPage /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
