import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import SignInForm from "../../components/SignInForm/SignInForm.jsx";
import logo from '../../assets/logo.png';
import './Login.css';

const Login = () => {

    const [log,setLog] = useState('log');

    return(
        <div className="login-container">

            <div className="form-container">

                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="options-form">
                    <p 
                        onClick={() => setLog('reg')}
                        className={ log === "reg" ? "active" : "" }
                    >Registro
                    </p>
                    <p 
                        onClick={() => setLog('log')}
                        className={ log === "log" ? "active" : "" }
                    >Logueo
                    </p>
                </div>
                <div className="form">
                    { log === 'log' ?  <SignInForm /> : <SignUpForm /> }
                </div>

            </div>

        </div>
    )
}

export default Login;