import "./online.css"

export default function Online({user}) {
  return (
    <div>
        <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <splan className="rightbarUsername">{user.username}</splan>
            </li>
    </div>
  )
}
