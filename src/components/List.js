import Post from './Post';
import PropTypes from 'prop-types';


const List = ({posts}) => {
    return posts.map((post) => <Post key={post.id} post={post}/>);
};

List.propTypes = {
    posts: PropTypes.array
  }

export default List;