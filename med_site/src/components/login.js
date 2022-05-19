import React, { Component } from "react";
import axios from 'axios';

export default class Login extends Component{

    handleSubmit = e =>{
        e.preventDefault()
        const data = {
            email:this.email,
            password:this.password
        }
        axios.post('http://localhost:8000/api/token/', data).then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>

                <div>
                    <label>Email</label>
                    <input type='text' placeholder='Email'
                    onChange={e => this.email = e.target.value}></input>
                </div>

                <div>
                    <label>Password</label>
                    <input type='password' placeholder='Password'
                    onChange={e => this.password = e.target.value}></input>
                </div>

                <button style={{"width":"100px","height":"30px"}} type="submit">Login</button>
            </form>
        )
    }
}