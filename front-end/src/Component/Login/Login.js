import React, { useEffect, useState } from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { BACKEND_URI } from "../../config/config"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Alert from 'react-bootstrap/Alert';

function Login({ setState, state }) {
    const Navigate = useNavigate();
    const formSchema = Yup.object().shape({
        userName: Yup.string()
            .required("User Name is mandatory"),

        email: Yup.string("Email is mandatory")
            .required("Email is mandatory")
            .matches(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Enter a valid email address"
            ),
        password: Yup.string()
            .required('Password is mandatory')
            .min(8, 'Password must be at 8 char long')
            .matches(
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character (!@#$*)"
            )
        ,
        confirmPwd: Yup.string()
            .required('Password is mandatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
    })
    const [logInEmail,setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("")
    const [err,setErr] = useState(false);
    const [errEmail,setErrEmail] = useState(false)
    const [errPassword,setErrPassword] = useState(false);

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, resetField, watch, formState: { errors } } = useForm(formOptions);
    const onSubmit = async (data) => {
        try {
            console.log("data", data.email);
            let email = data.email;
            let userName = data.userName;
            let password = data.password
            await axios.post(`${BACKEND_URI}/singup`, {
                userName,
                email,
                password
            }).then((res) => {
                console.log("res", res);
                if (res.data.result == "Email Already exist") {
                    // alert();
                    toast.error("Email Already exist! Please Use another email")
                } else {
                    toast.success("Sign Up successfully");
                    const container = document.querySelector('.container');
                    container.classList.toggle('active');
                }


            })
        } catch (e) {
            console.log("e", e);
        }

    }
    const handleSubmitLogin = async () => {
        try {
    // console.log(logInEmail,loginPassword);
    await axios.post(`${BACKEND_URI}/login`, {
        logInEmail,
        loginPassword
    }).then((loginRes)=>{
        // console.log("loginRes", loginRes);
        if(loginRes.data.result == "E-mail and password are required"){
            setErr(true)
        } else if(loginRes.data.result == "Invalid credentials"){
            setErrEmail(true)
        } else if(loginRes.data.result == "Invalid credentials password"){
            setErrPassword(true)
        } else {
           let cookiees = loginRes.data.status;
           localStorage.setItem("user", JSON.stringify(cookiees));
           toast.success("Login Successfully")
           setState(!state)
           Navigate("/home");
        }
    })
        } catch (e) {
            console.log("e", e);
        }
        // console.log("kkkh");
        // setState(!state)
        // Navigate("/home")
    }
    // console.log("err", err);
    const toggleForm = () => {
        const container = document.querySelector('.container');
        container.classList.toggle('active');
    };
    const handleSubmitSignup = () => {
        const container = document.querySelector('.container');
        container.classList.toggle('active');
    }

    return (
        <div className='login-image container-fluid'>
            <div className='containersssss'>
                <div className='row d-flex justify-content-center align-items-center   ' style={{ height: "96vh" }}>
                    <div className='col-lg-5'>

                        <section>
                            <div className="container">
                                <div className="user signinBx">

                                    <div className="formBx d-flex flex-column ">
                                        {/* <form  onSubmit={handleSubmitLogin}> */}
                                        <h2>Sign In</h2>
                                        <div className='text-start'>
                                        {err && <Alert variant="danger" className='text-start'>E-mail and password are required</Alert>}
                                        <input type="text" name="logInEmail" placeholder="Email Address" value={logInEmail}  onChange={(e)=>setLoginEmail(e.target.value)} />
                                        
                                        {errEmail && <span style={{color: "red", fontSize: "14px"}}>Email are not Correct</span>}
                                        <input type="password" name="loginPassword" placeholder="Password" value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)}/>
                                        {errPassword && <span style={{color: "red", fontSize: "14px"}}>Password are not Correct</span>}

                                        </div>
                                        <button className='btn btn-login' onClick={handleSubmitLogin}>Login</button>
                                        {/* <input type="submit" name="" value="Login" /> */}
                                        <p className="signup">
                                            Don't have an account ?
                                            <a href="#" onClick={toggleForm}>Sign Up.</a>
                                        </p>
                                        {/* </form> */}
                                    </div>
                                </div>
                                <div className="user signupBx">
                                    <div className="formBx d-flex flex-column text-start">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <h2>Create an account</h2>
                                            <input type="text" name="" placeholder="Username" {...register("userName", { required: true })} />
                                            <input type="email" name="" placeholder="Email Address" {...register("email", { required: true })} />
                                            {errors.email && <> &nbsp;<span style={{ color: "red", fontSize: "14px" }}>{errors.email.message}</span></>}
                                            <input type="password" name="" placeholder="Create Password" {...register("password", { required: true })} />
                                            {errors.password && <> &nbsp;<span style={{ color: "red", fontSize: "14px" }}>{errors.password.message}</span></>}
                                            <input type="password" name="" placeholder="Confirm Password" {...register("confirmPwd", { required: true })} />
                                            {errors.confirmPwd && <> &nbsp;<span style={{ color: "red", fontSize: "14px", textAlign: "left" }}>{errors.confirmPwd.message}</span></>}
                                            <br />
                                            <div className='mt-3 text-center'>
                                                <button className='btn btn-login' type="submit"
                                                // onClick={handleSubmitSignup}
                                                >Sign Up</button>
                                            </div>
                                            {/* <input type="submit" name="" value="Sign Up" /> */}
                                            <p className="signup">
                                                Already have an account ?
                                                <a href="#" onClick={toggleForm}>Sign in.</a>
                                            </p>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </section>



                        <Toaster
                            position="top-right"
                            reverseOrder={false}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login