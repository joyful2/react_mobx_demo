import React, { Component } from 'react'
import { inject, observer } from "mobx-react";
import {
	observable
} from 'mobx'
@inject('post')
@observer
class Action extends Component {

	render() {
		const {
			post
		} = this.props
		console.log('post:', post);
		return (
			<div>
				<div>
					<input placeholder='title' value={post.addForm.title} onChange={(e) => post.addForm.title = e.target.value} />
				</div>
				<div>
					<input placeholder='content' value={post.addForm.content} onChange={(e) => post.addForm.content = e.target.value} />
				</div>
				<div>
					<input type='number' placeholder='friendId' value={post.addForm.friendId} onChange={(e) => post.addForm.friendId = parseInt(e.target.value)} />
				</div>
				<button onClick={(e) => {
					// post.list.push()
					post.clear()
				}}>add</button>
				<button onClick={(e) => {
					// post.list.push()
					post.handleAdd()
				}}>clear</button>
			</div>
		);
	}

	componentWillUnmount() {
		this.props.post.clear()
	}
}

export default Action
