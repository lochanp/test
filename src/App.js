// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import TnC from './pages/TnC';
import ForgotPassword from './pages/ForgotPassword';
import LoginLander from './pages/LoginLander';
import SignUpPhase from './pages/Onboarding'
import UserChoice from './pages/UserChoice';
import SignUpOptions from './pages/SignUpOptions';
import PasswordRetrieve from './pages/PasswordRetrieve';
import ConfirmationScreen from './pages/ConfirmationScreen';

import './assets/scss/custom.scss'
import SetPassword from './pages/SetPassword';
import PwdConfirm from './pages/PasswordConfirmation';
import { createBrowserHistory } from 'history';

import Header from './components/Header';

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/" component={LoginLander} exact />
        <Route path="/signupchoices" component={SignUpOptions} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/forgotpasswordsuccess" component={PasswordRetrieve} />
        <Route path="/chooseusertype" component={UserChoice} />
        <Route path="/signup" component={SignUpPhase} />
        <Route path="/tnc" component={TnC} />
        <Route path="/confirm" component={ConfirmationScreen} />
        <Route exact path="/newpassword" component={SetPassword} />
        <Route exact path="/passwordsuccess" component={PwdConfirm} />



        {/* Sprint 2 related routes */}
        {/* <Route path="/" component={Header} /> */}
        {/* 1. Consumer Homepage */}


     



        {/* 9. Events Homepage - Under Construction */}
    
        {/* <Route path="/test" component={TestPage}/> */}
        
      </Switch>
      </Router>
    </div>
  );
}

export default App;
