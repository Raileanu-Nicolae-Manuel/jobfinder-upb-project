'use client';

import React from "react"

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ImageIcon, X } from 'lucide-react';

interface CompanyPostFormProps {
  onPostCreate: (post: any) => void;
}

export function CompanyPostForm({ onPostCreate }: CompanyPostFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      return;
    }

    const newPost = {
      title,
      content,
      image: image || 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      likes: 0,
      comments: 0,
      shares: 0,
      createdAt: 'now',
    };

    onPostCreate(newPost);
    setTitle('');
    setContent('');
    setImage(null);
    setImageFile(null);
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-foreground mb-6">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Post Title</label>
          <Input
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Post Content</label>
          <Textarea
            placeholder="Share your message with your audience..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Add Image</label>
          {image ? (
            <div className="relative">
              <img src={image || "/placeholder.svg"} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-2 hover:bg-red-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-secondary transition-colors"
            >
              <ImageIcon className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
            </button>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
          />
        </div>

        <div className="flex gap-3 justify-end">
          <Button variant="outline" type="button">
            Save as Draft
          </Button>
          <Button type="submit" className="gap-2">
            Publish Post
          </Button>
        </div>
      </form>
    </Card>
  );
}
