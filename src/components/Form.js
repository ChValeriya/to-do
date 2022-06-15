import {useState} from "react";
import PropTypes from 'prop-types';

const Form = ({posts, addPost}) => {
    const defaultValues = {title: "", desc: "", id: ""}
    const [post, setPost] = useState(defaultValues)

    const onChangeHandler = (e, key) => {
        const value = e.target.value;
        setPost({...post, [key]: value, id: Date.now() })
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addPost([...posts, post]);
        setPost(defaultValues)
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" onChange={(e) => onChangeHandler(e, 'title')} value={post.title} placeholder='your title'/>
            <input type="text" onChange={(e) => onChangeHandler(e, 'desc')} value={post.desc} placeholder='your description'/>
            <button type="submit">add to do</button>
        </form>
    );
}

Form.propTypes = {
    posts: PropTypes.array,
    addPost: PropTypes.func
}

export default Form;