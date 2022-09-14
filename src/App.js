import "./App.css";
import Post from "./components/Post";
import AddPostForm from "./components/Add-post-form"; 
function App() {
  return (
    <div className="App">
          <AddPostForm />

      <Post />
    </div>
  );
}

export default App;