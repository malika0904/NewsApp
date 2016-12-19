import React from 'react';

export default class ViewFavNewsGC extends React.Component
{
	constructor(){
		super();
		this.deleteHandler= this.deleteHandler.bind(this);

	}
	deleteHandler(){
		$.ajax({
			url: "http://localhost:8080/news_details/delete",
			type: "DELETE",
			data: this.props.favnewsarr,

			success: function(msg){
				console.log("msgg");
			},
			error: function(err){
				console.log("error occurred");
			}
		});
	}

	render()
	{
		return(
			<div className= "container">
				<div className= "jumbotron">
					<img src={this.props.favnewsarr.urlToImage} alt="img2" width="200px" height="150px"/>
					<h2>{this.props.favnewsarr.title}</h2>
					<h4>Published By:{this.props.favnewsarr.author}</h4>
					<p>{this.props.favnewsarr.description}
					For more details,refer this link{this.props.favnewsarr.url}
					{this.props.favnewsarr.publishedAt}</p>
					
					<button type= "button" onClick= {this.deleteHandler}>Delete</button>
				</div>
			</div>
		)
	}

}
