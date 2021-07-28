import React, { useState } from 'react';
import icon from '../Svg/Twitter.svg';
import '../Style/app.scss';
import axios from 'axios';

const Login = () => {
    const [data,setData] = useState({
        email:"",
        password:""
    })

    const changeHandler = (e)=>{
        const url="";
        const newData = {...data};
        newData[e.target.name] = e.target.value;
        setData(newData);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        // axios.get("",data)
        // .then(data=>{
        //     console.log(data)
        // })
        // .catch(err =>{
        //     console.log(err)
        // })
        console.log(data)
    }
    return (
        <div className="container">
            <div className="log-in-container">
                <div className="logo-container">
                    <img src={icon} alt="twitter-logo" className="logo" />
                </div>
                <h1>Log in to Twitter</h1>
                <form onSubmit={e=>submitHandler(e)}>
                    <div className="input-div">
                        <input 
                         type="text" 
                         name="email" 
                         placeholder="Phone,email, or username"
                         onChange={e=>changeHandler(e)}
                         autoComplete="off"
                        />
                    </div>
                    <div className="input-div">
                        <input 
                         type="password" 
                         name="password" 
                         placeholder="Password" 
                         onChange={e=>changeHandler(e)}
                        />
                    </div>
                    <div className="input-div-btn">
                        <button type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
