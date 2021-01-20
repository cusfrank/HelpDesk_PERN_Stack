import "./Modal.css"
import NavLinks from "../NavLinks"

const Modal = ({ isModalOpen, toggleIsModalOpen }) => {
  let ModalDisplay = isModalOpen ? "flex" : "none"
  const closeModal = () => {
    if (isModalOpen) toggleIsModalOpen()
  }

  return (
    <div id="myModal" className="modal" style={{ display: ModalDisplay }}>
      <div className="modal-content">
        <ul className="modal-link">
          <NavLinks />
          <li><span className="close" onClick={closeModal}>&times;</span></li>
        </ul>
      </div>

    </div>


  )
}
export default Modal