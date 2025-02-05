import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Mohsocial</h3>
                <span className="loginDesc">Connectwith friends and the world around you on Mohsocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Enter Username" className="loginInput" />
                    <input placeholder="Enter Email" className="loginInput" />
                    <input placeholder="Enter Password" className="loginInput" />
                    <input placeholder="Enter Password Again" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Login to your Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
