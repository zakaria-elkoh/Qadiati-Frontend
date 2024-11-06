export interface Post {
  id: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  content: string;
  timePosted: string;
  images: string[];
  reactions: {
    avatars: string[];
    count: number;
    mentionedUser: string;
  };
  stats: {
    comments: number;
    reposts: number;
  };
}
