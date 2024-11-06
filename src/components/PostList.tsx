import { FC } from "react";
import { posts } from "@/data/Post";
import PostCard from "@/components/PostCard";

const PostList: FC = () => {
  return (
    <div className="space-y-2 sm:px-4 py-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
