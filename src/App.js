//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Content  from './components/Content'
import Footer from './components/Footer'
import Thankyou from './components/ThankyouPage/Thankyou';
import ThankyouHeader from './components/ThankyouPage/Header';

import ProfileHeader from './components/Pages/Profile/Header';
import ProfileContent from './components/Pages/Profile/mainProfileContent';

function App() {
  return (
    <Router>
      <div className="bg-primary_background font-nunito">
          <Switch>
            <Route exact path="/">
              <Header />
              <Content />
              <Footer />
            </Route>
            <Route path="/waitlist-thanks">
              <ThankyouHeader />
              <Thankyou />
            </Route>
            <Route path="/profile">
              <ProfileHeader />
              <ProfileContent />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
