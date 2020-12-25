import "./App.css";
import Posts from "./components/Post.jsx";
import PostForm from "./components/PostForm.jsx";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
