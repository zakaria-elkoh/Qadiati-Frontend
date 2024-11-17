import { FC } from "react";
// import { posts } from "@/data/Post";
import PostCard from "@/components/PostCard";
import RepostCard from "./RepostCard";

const PostList: FC = ({ posts }) => {
  return (
    <div className="space-y-2 sm:px-4 py-4">
      {/* {posts?.map((post) => (
        <RepostCard key={post.id} post={post} />
      ))} */}
      {posts?.map((post) => {
        if (post.originalPost) {
          return <RepostCard key={post.id} post={post} />;
        } else {
          return <PostCard key={post.id} post={post} isPost={true} />;
        }
      })}
      {/* <PostCard key={post.id} post={post} /> */}
    </div>
  );
};

export default PostList;
