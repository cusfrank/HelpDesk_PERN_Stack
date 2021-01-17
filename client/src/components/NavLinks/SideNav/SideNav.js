import { Fragment } from "react"
import NavLinks from "../NavLinks"
import "./SideNav.css"

const SideNav = () => {
  return (
    <div className="SideNav">
      <ul>
        <NavLinks />
      </ul>
    </div>
  )
}

export default SideNav