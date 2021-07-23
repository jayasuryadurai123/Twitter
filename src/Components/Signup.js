import React, { useState } from 'react';
import '../Style/signup.scss';
import logo from '../Svg/Twitter.svg';

import axios from 'axios';

const Signup = () => {
    const url = "";
    const [data,setData] = useState({
        email:"",
        password:""
    })
    
    const changeHandler = (e)=>{
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const url="";
        // axios.post("",newData)
        // .then(response=>{
        //     console.log(response)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
        console.log(data);
    }
     
    return (
        <>
            <div className="container">
                <div className="container-wrap">
                    <div className="wrapper-container">
                        <div className="logo-container">
                            <img src={logo} alt="twitter-logo" />
                        </div>
                        <h1>Create your account</h1>
                        <form onSubmit={e=>submitHandler(e)}>
                            <div className="div-input">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    onChange={e =>changeHandler(e)}
                                />
                            </div>
                            <div className="div-input">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    id="password"
                                    onChange={e=>changeHandler(e)}
                                />
                            </div>
                            <div className="div-input-btn">
                                <button type="submit">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;