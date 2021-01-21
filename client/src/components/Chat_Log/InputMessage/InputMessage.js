import React, { Fragment, useState } from "react";
import "./inputMessage.css"

const InputMessage = ({ ticket_code }) => {
  const [message, setMessage] = useState("")

  const onSubmitForm = async e => {
    e.preventDefault()
    const auth_token = localStorage.getItem("auth-token")
    try {
      const body = { message }
      const response = await fetch("http://localhost:5000/api/chat_log", {
        method: "POST",
        headers: {
          "Content-TYpe": "application/json",
          "auth-token": auth_token
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          if (data.message == "jwt expired") { window.location = "/" }
          console.log(data)
        })
      window.location = "/helpdeskwindow"
    } catch (err) {
      console.error(err.message)
    }
  }


  return (
    <Fragment>
      <form onSubmit={onSubmitForm} className="input-form">
        <div className="chip chip-input">
          <img src="./img_avatar.png" alt="Person" width="96" height="96"></img>
          <div >
            [{ticket_code}]:&emsp;
          <input
              type="text"
              className="form-control"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <button className="btn btn-reply">SEND</button>
        </div>
      </form>
    </Fragment>
  )
}

export default InputMessage