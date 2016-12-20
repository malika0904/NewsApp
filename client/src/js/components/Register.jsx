import React from 'react';

export default class Register extends React.Component
{
	constructor(){
		super();
		this.registerHandler = this.registerHandler.bind(this);
	}
	registerHandler(){
		console.log("register handler");

  		$.ajax({
			url: "http://localhost:8080/user/register",
			type: "POST",
			dataType: 'JSON',
			data: 'fname='+document.getElementById("fname").value+ '&lname=' + document.getElementById("lname").value + '&email=' + document.getElementById("email").value + '&pwd=' + document.getElementById("pwd").value,

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
				<form>
				<fieldset>
				<h1>SignUp</h1>
				<h2><label>FirstName :<input type="text" placeholder="Firstname" id="fname" /></label></h2>

				<h2><label>LastName :<input type="text" placeholder="Lastname" id="lname"/></label></h2>
				<h2><label>Email Id :<input type="email" placeholder="email id" id="email" /></label></h2>
				<h2><label>Password :<input type="password" placeholder="password" id="pwd"/></label></h2>
				<button type="button" onClick = {this.registerHandler}>SignUp</button>
				</fieldset>
				</form>
			</div>
		)
	}
}