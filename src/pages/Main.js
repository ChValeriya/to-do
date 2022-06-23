import { createContext } from "react";
import { useHistory } from "react-router-dom";
import Form from "../components/Form";
import List from "../components/List";

export const TaskContext = createContext();

const Main = ({allPosts, post}) => {
  const {posts, setPosts} = allPosts;
  const {currentPost, setCurrentPost} = post;

  const history = useHistory();

  const deleteTask = (e) => {
    const {id} = e.target;
    const newPosts = posts.filter(post => post.id !== +id);
    setPosts(newPosts);
  };

  const openTask = (e) => {
    const id = e.target.dataset.id || e.target.parentNode.dataset.id;
    const currentEl = e.target.className;
    const paretEl = e.target.parentNode.className;
    if(currentEl === 'button') return;

    if(currentEl === 'card'|| paretEl === 'card') {
      const postOpen = posts.filter(post => post.id === +id);
      setCurrentPost(postOpen[0]);
      history.push("/task")
    }
  }
  
  return (
    <TaskContext.Provider value={{deleteTask, openTask}}>
      <div className="App">
        <Form posts={posts} addPost={setPosts}/>
        <List posts={posts}/>
      </div>
    </TaskContext.Provider>
  );
}
export default Main;