import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Task from "./pages/Task";
import "./styles.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState('');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main allPosts={{posts, setPosts}} post={{currentPost, setCurrentPost}} />
        </Route>
        <Route exact path="/:id">
          <Task post={currentPost}/>
        </Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}