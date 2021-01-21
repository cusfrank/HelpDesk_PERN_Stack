import react, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import './App.css';

//Components
import SideNav from "./Components/NavLinks/SideNav/SideNav"
import MobileNav from './Components/MobileNav/MobileNav';
import Modal from './Components/NavLinks/Modal/Modal'

//Pages
import Register from "./Pages/Admin/Register/Register"
import Login from "./Pages/Admin/Login/Login"
import TrackYourStatus from "./Pages/Customer/TrackYourStatus/TrackYourStatus"
import Success from "./Pages/Admin/Register/Success/Success"
import HelpDeskWindow from "./Pages/HelpDeskWindow/HelpDeskWindow"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleIsModalOpen = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
  }

  return (
    <Router>
      <Modal isModalOpen={isModalOpen} toggleIsModalOpen={toggleIsModalOpen} />
      <SideNav />
      <MobileNav toggleIsModalOpen={toggleIsModalOpen} />
      <Switch>
        <Route path="/helpdeskwindow" exact><HelpDeskWindow /></Route>
        <Route path="/customer/trackyourstatus" exact><TrackYourStatus /></Route>
        <Route path="/admin/register/success" exact><Success /></Route>
        <Route path="/admin/register" exact ><Register /></Route>
        <Route path="/admin/login" exact><Login /></Route>
        <Route path="/"><TrackYourStatus /></Route>
      </Switch>
    </Router>
  );
}

export default App;
