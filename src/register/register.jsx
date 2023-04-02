import { useState } from "react";
import "./register.css"
import {Link} from "react-router-dom"
function Register(params) {
    return(
        <div>
            <div className="container">
                <form action="">
                    <h1 className="container-title">Ro'yxatdan o'ting</h1>
                    <div className="row">
                        <div class="col-1">
                            <h4 className="input-title">Foydalanuvchi nomi</h4>
                            <input className="register-input" type="text" placeholder="Foydalanuvchi nomi"/>
                        </div>
                        <div class="col-1">
                            <h4 className="input-title">Parol</h4>
                            <input className="register-input" type="password" placeholder="Parol"/>
                            <h4 className="input-title">Parolni tasdiqlang</h4>
                            <input className="register-input" type="password" placeholder="Parolni tasdiqlang"/>
                        </div>
                        <Link to="/weather"><button className="signup-btn">Ro'yxatdan o'tish</button></Link>
                    </div>
                </form>
            </div>
        </div>
    
    )
}
export default Register;