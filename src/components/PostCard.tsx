import { FC } from "react";
import {
  Heart,
  MessageCircle,
  Repeat,
  Send,
  MoreHorizontal,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from "./ui/card";
import { Post } from "@/types/Post";
import { formatDistanceToNowStrict } from "date-fns";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post, isPost }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedText = post.content.slice(0, 150);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
      className={`max-w-xl mx-auto shadow overflow-hidden ${
        isPost ? "rounded-lg" : "rounded-none"
      }`}
    >
      <div className="p-4 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={post.author.profilePictureUrl}
              alt={post.author.name}
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{post.author.name}</h3>
              <p className="text-sm text-gray-500">{post.author.jobTitle}</p>
              <div className="flex items-center text-xs text-gray-500">
                <span className="capitalize">
                  {formatDistanceToNowStrict(new Date(post.createdAt), {
                    addSuffix: true,
                  })}
                </span>
                <span className="mx-1">•</span>
                <Globe className="w-3 h-3" />
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-3 text-sm dark:text-white/90" dir="rtl">
          {isExpanded ? post.content : truncatedText}
          {!isExpanded && post.content.length > 150 && (
            <span
              className="text-blue-600 cursor-pointer"
              onClick={toggleExpand}
            >
              ...more
            </span>
          )}
        </p>
        {isExpanded && (
          <span
            className="mt-1 text-sm text-blue-600 font-semibold cursor-pointer"
            onClick={toggleExpand}
          >
            Show less
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-1">
        {post?.images?.length > 0 && (
          <div className="col-span-2">
            <img
              src={post.images[0]}
              alt="Main panel image"
              className="w-full h-64 object-cover"
            />
          </div>
        )}
        {post?.images?.slice(1, 3).map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Panel ${index + 1}`}
              className="w-full h-32 object-cover"
            />
            {index === 1 && post.images.length > 3 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  +{post.images.length - 3}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {isPost && (
        <div className="p-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <span className="flex -space-x-1.5">
                {post?.reactions?.avatars?.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-5 h-5 rounded-full overflow-hidden bg-blue-500 border border-white"
                  >
                    <img src={avatar} alt="" className="h-full rounded-full" />
                  </div>
                ))}
              </span>
              <span>
                {post?.reactions?.mentionedUser} and {post.likesCount} others
              </span>
            </div>
            <div>{post.commentsCount} comments • 10 reposts</div>
          </div>

          <div className="flex justify-between mt-4 pt-4 border-t">
            <Button variant="ghost" size="sm" className="flex-1">
              <Heart className="h-5 w-5 mr-2" />
              Like
            </Button>
            <Button variant="ghost" size="sm" className="flex-1">
              <MessageCircle className="h-5 w-5 mr-2" />
              Comment
            </Button>
            <Button variant="ghost" size="sm" className="flex-1">
              <Repeat className="h-5 w-5 mr-2" />
              Repost
            </Button>
            <Button variant="ghost" size="sm" className="flex-1">
              <Send className="h-5 w-5 mr-2" />
              Send
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default PostCard;
