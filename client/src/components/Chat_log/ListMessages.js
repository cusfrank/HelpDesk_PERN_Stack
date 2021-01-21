import React, { Fragment, useEffect, useState } from "react"
import "./ListMessages.css"

const ListMessages = () => {
  const [messages, setMessages] = useState([{}])

  const getMessages = async () => {
    const auth_token = localStorage.getItem("auth-token")
    try {
      await fetch("http://localhost:5000/api/chat_log", {
        method: "GET",
        headers: {
          "auth-token": auth_token
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.message == "jwt expired") { window.location = "/" }
          setMessages(data)
          console.log(data)
        })
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getMessages()
  }, [])

  const isAdmin = localStorage.getItem("isAdmin")
  const ticket_code = localStorage.getItem("ticket-code")

  return (
    <Fragment>
      <p>A list of all messages</p>

      {messages.map(message => (
        <div className="chip" key={`${message.id}`}>
          <img src="./img_avatar.png" alt="Person" width="96" height="96"></img>
          <div >
            [{ticket_code}]:&emsp;{message.message}
          </div>
          <button style={{ "display": (isAdmin == "true") ? "" : "none" }} className="btn btn-edit btn-advanced">EDIT</button>
          <button style={{ "display": (isAdmin == "true") ? "" : "none" }} className="btn btn-delete btn-advanced">DELETE</button>
        </div>))}
      <button className="btn btn-reply">REPLY</button>
    </Fragment>
  )
}
export default ListMessages