import React from 'react';
import DisplayGrandChildComponent from './DisplayGrandChildComponent.jsx';

export default class IterateNewsChildComponent extends React.Component
{
	constructor(){
		super();

	}

	render(){
		return(
			<div>
				<h1>contact</h1>
				{
					this.props.newsobjectarr.map(function(item){
						return <DisplayGrandChildComponent newsobject = {item} />;
				})
				}
				<h2>byyee</h2>
			</div>
		)
	}

}


