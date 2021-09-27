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

import ContactHeader from './components/Pages/ContactUs/ContactHeader'
import ContactContent from './components/Pages/ContactUs/ContactContent';

import ClanChallenge from './components/Pages/Clan/Challenge';
import ClanIndex from './components/Pages/Clan/Index';
import ClanMembers from './components/Pages/Clan/Members';
import ClanHeader from './components/Pages/Clan/Header';

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
            <Route path="/home">
              {/* <ProfileHeader /> */}
              <ClanHeader />
              <ProfileContent />
            </Route>
            <Route path="/contact-us">
              <ContactHeader />
              <ContactContent />
            </Route>
            <Route exact path="/clan/">
              <ClanHeader />
              <ClanIndex />
            </Route>
            <Route path="/clan/members">
              <ClanHeader />
              <ClanMembers />
            </Route>
            <Route path="/clan/challenge">
              <ClanHeader />
              <ClanChallenge />
            </Route>
            
          </Switch>
      </div>
    </Router>
  );
}

export default App;
