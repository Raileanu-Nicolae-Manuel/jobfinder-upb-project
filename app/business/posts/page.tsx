'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CompanyPostForm } from '@/components/business/company-post-form';
import { CompanyPostsFeed } from '@/components/business/company-posts-feed';
import { Plus, Settings } from 'lucide-react';

export default function CompanyPostsPage() {
  const [showPostForm, setShowPostForm] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Exciting News!',
      content: 'We are thrilled to announce our expansion into new markets. Join us on this exciting journey!',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      likes: 234,
      comments: 45,
      shares: 12,
      createdAt: '2 days ago',
    },
    {
      id: 2,
      title: 'Team Achievement',
      content: 'Our amazing team just hit a major milestone. Congratulations to everyone involved!',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      likes: 189,
      comments: 32,
      shares: 8,
      createdAt: '5 days ago',
    },
  ]);

  const handlePostCreate = (newPost: any) => {
    setPosts([{ ...newPost, id: posts.length + 1 }, ...posts]);
    setShowPostForm(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4 lg:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Company Posts</h1>
            <p className="text-muted-foreground mt-2">Share updates and engage with your audience</p>
          </div>
          <Button onClick={() => setShowPostForm(!showPostForm)} className="gap-2">
            <Plus className="w-4 h-4" />
            New Post
          </Button>
        </div>

        {showPostForm && (
          <div className="mb-8">
            <CompanyPostForm onPostCreate={handlePostCreate} />
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CompanyPostsFeed posts={posts} />
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Post Statistics</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Engagement</p>
                  <p className="text-2xl font-bold text-primary">512</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Views</p>
                  <p className="text-2xl font-bold text-primary">2,340</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Average Reach</p>
                  <p className="text-2xl font-bold text-primary">1,170</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Tips</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Use engaging headlines to capture attention</li>
                <li>• Include high-quality images for better engagement</li>
                <li>• Post consistently for better reach</li>
                <li>• Encourage comments and discussion</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
