
import BlogList from "../components/BlogList";
import useFetch from '../usefetch'

const Home = () => {
 
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/Blogs')

  return (
    <div className="home">
      {error && <div>{ error }</div>}
      {isPending && <div> Loading.... </div> }
      {blogs && <BlogList blog={blogs} title='All Blogs!' />}
    </div>
  );
}

export default Home;