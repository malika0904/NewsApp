import React from 'react';
import ViewFavNewsGC from './ViewFavNewsGC';

export default class FavNewsChildIterate extends React.Component
{
	constructor(){
		super();

	}

	render()
	{
	console.log("entry child ");
		return(
			<div>
				{
					this.props.savedarr.map(function(i){
						return(<ViewFavNewsGC favnewsarr = {i} />)
					})
				}
			</div>
		)
		console.log("child bye");
	}

}
