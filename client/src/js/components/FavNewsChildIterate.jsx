import React from 'react';
import ViewFavNews from './ViewFavNews.jsx';

export default class FavNewsChildIterate extends React.Component
{
	constructor(){
		super();

	}

	render()
	{
	console.log("entry itertae ");
		return(
			<div>
				{
					this.props.savedarr.map(function(item){
						return(<ViewFavNews favnewsarr= {item} />)
				})
				}
			</div>
		)
	}

}
