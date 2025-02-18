import "./login.css";
import { useRef } from "react";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const handleClick = (e) => {
        e.preventDefault();
        console.log(email)
    }

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Mohsocial</h3>
                <span className="loginDesc">Connectwith friends and the world around you on Mohsocial</span>
            </div>
            <div className="loginRight">
                {/* form */}
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Enter Email" className="loginInput" type="email" ref={email} required />
                    <input placeholder="Enter Password" className="loginInput" type="password" ref={password} minLength="6" required />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Aaccount</button>
                </form>
            </div>
        </div>
    </div>
  )
}
