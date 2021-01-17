import "../../../Form.css"
const Login = () => {
  return (
    <div className="main">
      <form>
        <ul>
          <li><label>Email</label><input type="text" /></li>
          <li><label>Password</label><input type="text" /></li>
          <li><div></div><button class="btn">Login</button></li>
          <li className='next-block'><a style={{ "text-decoration": "underline" }} href="/admin/register">Register as Admin</a></li>
        </ul>
      </form>

    </div>
  )
}
export default Login