import React from 'react';
import Register from './Register.jsx';
var {Link} = require('react-router');

export default class Login extends React.Component
{
	constructor(){
		super();
		this.loginHandler = this.loginHandler.bind(this);
	}

	loginHandler(){
		$.ajax({
			url: "http://localhost:8080/user/login",
			type: "PUT",

			success: function(msg){
				console.log("msgg");
			},
			error: function(err){
				console.log("error occurred");
			}
		})
	}

	render(){
		return(
			<div>
				<h2>Login</h2>
				<h3>Username : <input type="text" placeholder="Username"/></h3>
				<h3>Password : <input type="password" placeholder="Password"/></h3>
				<h3><button type= "button" onClick = {this.loginHandler} >Login</button></h3>
				<h3>If new user :<Link to="/register">SignUp</Link></h3>
			</div>
		)
	}
}