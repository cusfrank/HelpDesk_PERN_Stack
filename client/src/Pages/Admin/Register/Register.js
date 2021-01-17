import "../../../Form.css"
const Register = () => {
  return (
    <div className="main">
      <form>
        <ul>
          <li><label>Name</label><input type="text" /></li>
          <li><label>Email</label><input type="text" /></li>
          <li><label>Password</label><input type="text" /></li>
          <li><div></div><button class='btn'>Register</button></li>
        </ul>
      </form>

    </div>
  )
}
export default Register