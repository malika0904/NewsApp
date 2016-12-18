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
				console.log("msg entry");

				var iarr = msg;
				for(var j= 0; j<iarr.length; j++)
				{
					console.log("i array "+ iarr[j].author);
				}
				console.log("msg exit");

				that.setState({favarr : iarr});
			},
			error: function(err){
				console.log("error occurred");
			}

		})
		console.log("bbbyyyeee");
	}

	render(){
		return(
			<div>
				<h1>Your Favourite News are listed here</h1>
				<h3>end fav news</h3>
				<FavNewsChildIterate savedarr = {this.state.favarr} />
			</div>
		)
	}
}