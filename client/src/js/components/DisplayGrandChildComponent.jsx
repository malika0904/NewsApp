import React from 'react';


export default class DisplayGrandChildComponent extends React.Component
{
	constructor(){
		super();
		this.savehandler = this.savehandler.bind(this);

	}

	savehandler(){
		alert("saved successfully");
		$.ajax({

			url:"http://localhost:8080/news_details/save",
			type: "POST",
			dataType: 'JSON',
			data: this.props.newsobject,
			

			success: function(msg){
				console.log("Saved now");
			},
			error: function(err){
				console.log("Error occurred here");
			}
		});
	}

	render()
	{
		return(
			<div className= "container">
				<div className= "jumbotron">
					<img src ={this.props.newsobject.urlToImage} alt= "img1" width="200px" height="150px"/>
					<h3>{this.props.newsobject.title}</h3>
					<p>
					Published By:{this.props.newsobject.author}
					{this.props.newsobject.description}
					</p>
                    <button type="button" onClick = {this.savehandler}>Save</button>
					
				</div>
			</div>
		);
	}
}