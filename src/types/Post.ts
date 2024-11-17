export interface Post {
  id: string;
  author: {
    id: string;
    name: string;
    profilePictureUrl?: string;
    jobTitle?: string;
  };
  title?: string;
  content: string;
  image?: string;
  likesCount: number;
  commentsCount: number;
  hashtags: string[];
  privacyLevel: string;
  allowComments: boolean;
  isPinned: boolean;
  isDeleted: boolean;
  archived: boolean;
  isDraft: boolean;
  createdAt: Date;
  originalPost?: string | null;
}
