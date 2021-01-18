import React, { useState } from "react"
import "../../../Form.css"
const TrackYourStatus = () => {
  const [ticketCode, setTicketCode] = useState("")

  const newTicketCode = async e => {
    e.preventDefault();
    try {
      fetch("http://localhost:5000/api/customer/new_ticket_code")
        .then(response => response.json())
        .then(data => setTicketCode(data.new_Ticket_Code))
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="main">
      <form>
        <ul>
          <li><label>Ticket Code</label><input type="text" /></li>
          <li><div></div><button className="btn">Search</button></li>
          <li className="next-block"><label>New ticket code</label></li>
          <li><span style={{ "display": ticketCode ? "block" : "none" }}>{ticketCode}</span><button className="btn" onClick={newTicketCode}>Get</button></li>
        </ul>
      </form>
    </div>
  )
}
export default TrackYourStatus