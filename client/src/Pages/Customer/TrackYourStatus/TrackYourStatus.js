import "../../../Form.css"
const TrackYourStatus = () => {
  return (
    <div className="main">
      <form>
        <ul>
          <li><label>Ticket Code</label><input type="text" /></li>
          <li><div></div><button class="btn">Search</button></li>
          <li className="next-block"><label>New ticket code</label></li>
          <li><div></div><button class="btn">Get</button></li>
        </ul>
      </form>
    </div>
  )
}
export default TrackYourStatus