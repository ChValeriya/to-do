import PropTypes from 'prop-types';

const Post = ({post}) => {
    return (
        <div id="post">
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <button onClick={(e) => (e.target.parentNode.parentNode.removeChild(e.target.parentNode))}>delete to do</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;