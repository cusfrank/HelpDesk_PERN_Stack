import react, { Fragment, useState } from 'react';
import './App.css';

//components
import SideNav from "./components/NavLinks/SideNav/SideNav"
import MobileNav from './components/MobileNav/MobileNav';
import Modal from './components/NavLinks/Modal/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleIsModalOpen = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
  }
  return (
    <Fragment>
      <Modal isModalOpen={isModalOpen} toggleIsModalOpen={toggleIsModalOpen} />
      <SideNav />
      <MobileNav toggleIsModalOpen={toggleIsModalOpen} />

      <div className="main">
        <h2>HelpDesk PERN Stack</h2>

        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      </div>
    </Fragment>
  );
}

export default App;
