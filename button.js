'use strict';
const e = React.createElement;
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {like: false};
    }
    render() {
        if (this.state.like) {
            return "You like comment number " + this.props.commentId;
        }
        return e(
            'button',
            { onClick: () => this.setState({like: true})},
            'Like'
        )
    };

}

document.querySelectorAll('.like_button').forEach(
    item => {
        const commentId = parseInt(item.dataset.commentid, 10)
        ReactDOM.render(
            e(LikeButton, {commentId: commentId}),
            item
        )
    }
)