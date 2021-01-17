import "./Modal.css"
import NavLinks from "../NavLinks"

const Modal = ({ isModalOpen, toggleIsModalOpen }) => {
  var ModalDisplay = isModalOpen ? "block" : "none"
  const closeModal = () => {
    if (isModalOpen) toggleIsModalOpen()
  }

  return (
    <div id="myModal" className="modal" style={{ display: ModalDisplay }}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <ul>
          <NavLinks />
        </ul>
      </div>

    </div>


  )
}
export default Modal