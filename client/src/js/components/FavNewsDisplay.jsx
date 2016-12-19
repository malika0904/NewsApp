import React from 'react';
import FavNewsChildIterate from './FavNewsChildIterate';

export default class FavNewsDisplay extends React.Component
{
	constructor(){
		super();
		this.state = {favarr:[]};
	}

	componentDidMount(){
		console.log("view handler entry");
		var that = this;
		$.ajax({
			url:"http://localhost:8080/news_details/view",
			type: "GET",
			dataType: 'JSON',

			success: function(msg){
				var arr = msg;

				that.setState({favarr : arr});	
			},
			error: function(err){
				console.log("error occurred");
			}

		});
	}

	render(){
		console.log("parent render");
		return(
			<div>
				<h1>Your Favourite News are listed here</h1>
				<FavNewsChildIterate savedarr = {this.state.favarr} />
			</div>
		)
		console.log("parent exit");
	}
}