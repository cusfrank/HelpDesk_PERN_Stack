import react, { Fragment, useState } from "react"
import "./MobileNav.css"

const MobileNav = ({ toggleIsModalOpen }) => {
  const toggleModal = () => {
    toggleIsModalOpen()
  }
  return (
    <Fragment>
      <div className="MobileNav">
        <div className="container" onClick={toggleModal}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </Fragment>

  )
}

export default MobileNav