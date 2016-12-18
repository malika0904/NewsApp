import React from 'react';


export default class ViewFavNews extends React.Component
{
	constructor(){
		super();

	}

	render()
	{
		return(
			<div className= "container">
				<div className= "jumbotron">
					<img src ={this.props.favnewsarr.urlToImage} alt= "img1" width="200px" height="150px"/>
					<h3>{this.props.favnewsarr.title}</h3>
					<p>
					Published By:{this.props.favnewsarr.author}
					{this.props.favnewsarr.description}
                    </p>
					<button type="button">Update</button>
					<button type="button">Delete</button>
					
				</div>
			</div>
		);
	}
}