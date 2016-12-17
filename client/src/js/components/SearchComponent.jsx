import React from 'react';

export default class SearchComponent extends React.Component{
	constructor(){
		super();
		this.searchHandler = this.searchHandler.bind(this);
	}

	searchHandler(){
		console.log('clicked search '+ document.getElementById("searchid").value);
		this.props.searchProvider(document.getElementById("searchid").value);
	}


	render(){
		return(
		<div>
			<input type="text" placeholder="Enter Provider" id="searchid"/>
			<button type="button" onClick={this.searchHandler} >Search</button>

		</div>
		)
	}
}