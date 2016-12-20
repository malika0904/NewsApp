import React from 'react';

export default class ViewFavNewsGC extends React.Component
{
	constructor(){
		super();
		this.deleteHandler= this.deleteHandler.bind(this);
		this.updateHandler= this.updateHandler.bind(this);
		this.state = {value:''};
		this.textareaChange= this.textareaChange.bind(this);
	}

	deleteHandler(){
			alert("Deleted");
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

	textareaChange(event){
		this.setState({value: event.target.value});
	}

	updateHandler(){
		$.ajax({
			url: "http://localhost:8080/news_details/update",
			type: "PUT",
			data: 'url='+ this.props.favnewsarr.url+ '&comment='+ this.state.value,
			success: function(msg){
				console.log("msgg ");
			},
			error: function(err){
				console.log("error occurred");
			}
		})
	}

	render()
	{
		return(
			<div className= "container">
				<div className= "jumbotron">
					<img src={this.props.favnewsarr.urlToImage} alt="img2" width="200px" height="150px"/>
					<h2>{this.props.favnewsarr.title}</h2>
					<h4>Published By:{this.props.favnewsarr.author}</h4>
					{this.props.favnewsarr.description}
					For more details,refer this link{this.props.favnewsarr.url}
					<h4>{this.props.favnewsarr.publishedAt}</h4>
					<h4>{this.props.favnewsarr.url}</h4>
					<h4>{this.state.value}</h4>
					<textarea rows="3" cols="30" placeholder="put your comment here" onChange={this.textareaChange}>
					</textarea>
				
				
					<button type= "button" onClick= {this.deleteHandler}>Delete</button>
					<button type= "button" onClick= {this.updateHandler}>Update</button>

	
				</div>
			</div>
		)
	}

}
