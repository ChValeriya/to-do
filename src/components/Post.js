import {useContext} from 'react';
import {TaskContext} from '../pages/Main';
import PropTypes from 'prop-types';

const Post = ({post}) => {
    const {deleteTask, openTask} = useContext(TaskContext);
    return (
        <div className="card" onClick={openTask} data-id={post.id}>
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <button className="button" id={post.id} onClick={deleteTask}>delete to do</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;