// import { useAppDispatch, useAppSelector } from "@/store/hooks";
import PostList from "@/components/PostList";
import { fetchPosts } from "@/store/slices/postSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log("posts", posts);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
