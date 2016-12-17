import React from 'react';

export default class DisplayGrandChildComponent extends React.Component
{
	constructor(){
		super();

	}

	render(){
		return(
			<div>
				<article class= "row jumbotron">
					<div class= "col-12 ">
						<h1>{this.props.newsobject.title}</h1>
						{this.props.newsobject.author}
						{this.props.newsobject.description}
						{this.props.newsobject.urlToImage}
					</div>
				</article>
			</div>
		)
	}
}