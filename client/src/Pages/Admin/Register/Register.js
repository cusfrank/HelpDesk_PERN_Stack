
import { useState } from "react"
import { Redirect } from "react-router-dom"
import "../../../Form.css"
const Register = () => {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { Name, Email, Password }
      fetch("http://localhost:5000/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          if (data.message == "success") {
            window.location = "/admin/register/success"
          }
        })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="main">
      <form onSubmit={onSubmitForm}>
        <ul>
          <li><label>Name</label>
            <input
              type="text"
              value={Name}
              onChange={e => setName(e.target.value)}
            /></li>
          <li><label>Email</label>
            <input
              type="text"
              value={Email}
              onChange={e => setEmail(e.target.value)}
            /></li>
          <li><label>Password</label>
            <input
              type="text"
              value={Password}
              onChange={e => setPassword(e.target.value)}
            /></li>
          <li><div></div><button className='btn'>Register</button></li>
        </ul>
      </form>

    </div>
  )
}
export default Register