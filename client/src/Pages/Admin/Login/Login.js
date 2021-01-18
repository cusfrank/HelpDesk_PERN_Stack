import { useState } from "react"
import "../../../Form.css"
const Login = () => {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { Email, Password }
      fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => console.log(data))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="main">
      <form onSubmit={onSubmitForm}>
        <ul>
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
          <li><div></div><button className="btn">Login</button></li>
          <li className='next-block'><a style={{ "textDecoration": "underline" }} href="/admin/register">Register as Admin</a></li>
        </ul>
      </form>
    </div>
  )
}
export default Login