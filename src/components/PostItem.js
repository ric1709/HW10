import React from 'react'
import './PostItem.css'
function PostItem(props) {
	return (
		<div className='card'>
			<div className='title'>
				<h2>Card</h2>
				<h3 className='id'> {props.id}</h3>
			</div>
			<p className='text'>{props.title}</p>
			<img className='img' src={props.url} />
		</div>
	)
}

export default PostItem
