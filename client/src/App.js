import react, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import './App.css';

//components
import SideNav from "./components/NavLinks/SideNav/SideNav"
import MobileNav from './components/MobileNav/MobileNav';
import Modal from './components/NavLinks/Modal/Modal'

//pages
import Register from "./Pages/Admin/Register/Register"
import Login from "./Pages/Admin/Login/Login"
import TrackYourStatus from "./Pages/Customer/TrackYourStatus/TrackYourStatus"
import Success from "./Pages/Admin/Register/Success/Success"

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
