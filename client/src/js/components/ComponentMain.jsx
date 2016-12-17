import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './SearchComponent';
import IterateNewsChildComponent from './IterateNewsChildComponent';

export default class ComponentMain extends React.Component
{
	constructor(){
		super();
		this.state = {newsarr:[]};
		this.fetchNewsFromApi = this.fetchNewsFromApi.bind(this);
	}

	fetchNewsFromApi(provider){
		var that = this;
		$.ajax({
     		url: "https://newsapi.org/v1/articles?source=" +provider+ "&apiKey=c37357c46e3441b29e0c4c976e74299c",
     		type: "GET",
     		dataType: 'JSON',

   			success : function(msg){
     			console.log('success '+provider);
     			var arr = msg.articles;

     			/* for(var i=0; i<arr.length; i++)
     			{
     				console.log("headings values "+ arr[i].title);
     			}
     			*/
     			
     			that.setState({newsarr: arr});
     			console.log("newsarr ");

     		},
     		error: function(err){
     			console.log('error in fetching');
     		}
 		});
	}
	
	render()
	{
		console.log(this.state.newsarr);
		return(
				<div id="main">
					<SearchComponent searchProvider={this.fetchNewsFromApi}/>
					<IterateNewsChildComponent newsobjectarr ={this.state.newsarr} />	
				</div>
		  	)
	}
} 
