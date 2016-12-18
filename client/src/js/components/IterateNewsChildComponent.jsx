import React from 'react';
import DisplayGrandChildComponent from './DisplayGrandChildComponent.jsx';

export default class IterateNewsChildComponent extends React.Component
{
	constructor(){
		super();

	}

	render()
	{
		return(
			<div>
				{
					this.props.newsobjectarr.map(function(item){
						return(<DisplayGrandChildComponent newsobject = {item} />)
				})
				}
			</div>
		)
	}

}


