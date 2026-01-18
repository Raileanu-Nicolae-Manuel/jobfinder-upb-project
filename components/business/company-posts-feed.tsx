'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2, MoreVertical } from 'lucide-react';
import { useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
}

interface CompanyPostsFeedProps {
  posts: Post[];
}

export function CompanyPostsFeed({ posts }: CompanyPostsFeedProps) {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const toggleLike = (postId: number) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            {/* Post Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">C</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Your Company</h3>
                  <p className="text-xs text-muted-foreground">{post.createdAt}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>

            {/* Post Title and Content */}
            <div className="mb-4">
              <h4 className="font-semibold text-foreground text-lg mb-2">{post.title}</h4>
              <p className="text-foreground/80 leading-relaxed text-pretty">{post.content}</p>
            </div>

            {/* Post Image */}
            <div className="mb-4 -mx-6 -mb-6">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Post Stats */}
            <div className="flex items-center justify-between text-xs text-muted-foreground px-6 py-3 border-t border-border">
              <div className="flex gap-6">
                <span>{post.likes} Likes</span>
                <span>{post.comments} Comments</span>
                <span>{post.shares} Shares</span>
              </div>
            </div>

            {/* Post Actions */}
            <div className="flex gap-2 px-6 pb-3 border-t border-border pt-3">
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 gap-2"
                onClick={() => toggleLike(post.id)}
              >
                <Heart
                  className={`w-4 h-4 ${
                    likedPosts.has(post.id)
                      ? 'fill-destructive text-destructive'
                      : 'text-muted-foreground'
                  }`}
                />
                Like
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 gap-2">
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                Comment
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 gap-2">
                <Share2 className="w-4 h-4 text-muted-foreground" />
                Share
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
