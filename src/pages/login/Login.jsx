import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Mohsocial</h3>
                <span className="loginDesc">Connectwith friends and the world around you on Mohsocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Enter Email" className="loginInput" />
                    <input placeholder="Enter Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Aaccount</button>
                </div>
            </div>
        </div>
    </div>
  )
}
