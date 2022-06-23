const Task = ({post}) => {
    return (
        <div>
            <h1>title {post.title}</h1>
            <h3>description {post.desc}</h3>
            <p>id {post.id}</p>
        </div>
    )
}

export default Task