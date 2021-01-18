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
import Home from "./Pages/Home"
import TrackYourStatus from "./Pages/Customer/TrackYourStatus/TrackYourStatus"

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
        <Route path="/customer/trackyourstatus"><TrackYourStatus /></Route>
        <Route path="/admin/register" ><Register /></Route>
        <Route path="/admin/login" ><Login /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
