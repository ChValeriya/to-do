import {useState} from "react";
import Form from './components/Form';
import List from "./components/List";
import "./styles.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  
  return (
    <div className="App">
      <Form posts={posts} addPost={setPosts}/>
      <List posts={posts}/>
    </div>
  );
}