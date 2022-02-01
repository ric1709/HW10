import React from 'react'
import PostItem from './PostItem'
import './Post.css'

function Posts(props) {
	return (
		<div className='main'>
			{props.data.map((el) => (
				<PostItem
					key={el.id}
					title={el.title}
					id={el.id}
					url={el.thumbnailUrl}
				/>
			))}
		</div>
	)
}

export default Posts
