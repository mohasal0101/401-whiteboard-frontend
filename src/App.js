import './App.css';
import Post from './components/post';
import AddPostForm from './components/addPostForm';
import AddCommentForm from '../components/addCommentForm';

function App() {
  return (
    <div className="App">
      <h1 className='text-center text-5xl'>hello</h1>
      <Post />
      <AddCommentForm />
      <AddPostForm />
    </div>
  );
}

export default App;