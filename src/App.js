import PostBlog from './Component/postBlog';
import './App.css'

const App = () => {
    return(
      <div>
        <ul>
          <li><a href='/'>PostBlog</a></li>
          <li><a href='/getBlogs'>GetBlogs</a></li>
        </ul>
        <PostBlog />
      </div>
    )
};

export default App;
