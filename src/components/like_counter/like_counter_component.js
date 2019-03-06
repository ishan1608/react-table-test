import React from 'react';
import './like_counter.scss';

class LikeCounterComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			likesCount: 0
		};
		this.onLike = this.onLike.bind(this);
	}

	onLike() {
		let newLikesCount = this.state.likesCount + 1;
		this.setState({
			likesCount: newLikesCount
		});
	}

	render() {
		return (
			<div className="like-counter">
				Likes : <span>{this.state.likesCount}</span>
				<div>
					<button className="btn btn-primary" onClick={this.onLike}>Like Me</button>
				</div>
			</div>
		);
	}

}

export default LikeCounterComponent;
