import React, { useState } from "react"
import "../../../Form.css"
const TrackYourStatus = () => {
  const [ticketCode, setTicketCode] = useState("")
  //customer register
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
  //customer login
  const [ticket_code_input, setTicketCodeInput] = useState("")
  const customer_login = async e => {
    e.preventDefault()
    try {
      const body = { ticket_code: ticket_code_input }
      fetch("http://localhost:5000/api/customer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          if (data.message == "success") {
            localStorage.setItem("auth-token", data.auth_token)
            localStorage.setItem("isAdmin", "false")
            localStorage.setItem("ticket-code", ticket_code_input)
            window.location = "/helpdeskwindow"
          }
          if (data.message == "failed") {
            console.log("failed")
          }
          else {
            console.log(data.message)
          }
        })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="main">
      <form>
        <ul>
          <li><label>Ticket Code:</label>
            <input
              type="text"
              value={ticket_code_input}
              onChange={e => setTicketCodeInput(e.target.value)}
            />
          </li>
          <li><div></div><button className="btn" onClick={customer_login}>Search</button></li>

          <li className="next-block"><label>New Ticket Code:</label></li>
          <li><span style={{ "display": ticketCode ? "block" : "none" }} className="ticket_code">{ticketCode}</span>
            <button
              className="btn"
              onClick={newTicketCode}>Get</button></li>
        </ul>
      </form>
    </div>
  )
}
export default TrackYourStatus