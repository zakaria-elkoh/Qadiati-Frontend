import { FC } from "react";
import {
  MoreHorizontal,
  Globe,
  Heart,
  MessageCircle,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from "./ui/card";
import { Post } from "@/types/Post";
import PostCard from "./PostCard";
import { formatDistanceToNowStrict } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface PostCardProps {
  post: Post;
}

const RepostCard: FC<PostCardProps> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedText = post.content.slice(0, 150);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="max-w-xl mx-auto shadow rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage  src={post.author.profilePictureUrl} />
              <AvatarFallback>
                {post.author.name.split(" ")[0][0] +
                  post.author.name.split(" ")[1][0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{post.author.name}</h3>
              <p className="text-sm text-gray-500">{post.author.jobTitle}</p>
              <div className="flex items-center text-xs text-gray-500">
                <span>
                  {" "}
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
      <div className="px-2">
        <PostCard key={post.id} post={post.originalPost} />
      </div>
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
          {/* <Button variant="ghost" size="sm" className="flex-1">
            <Repeat className="h-5 w-5 mr-2" />
            Repost
          </Button> */}
          <Button variant="ghost" size="sm" className="flex-1">
            <Send className="h-5 w-5 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default RepostCard;
