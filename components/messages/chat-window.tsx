"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Send,
  Smile,
  ImageIcon,
  Check,
  CheckCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatWindowProps {
  conversationId: string
}

const mockMessages = [
  {
    id: 1,
    sender: "other",
    text: "Hi John! Thank you for applying to the Senior Frontend Developer position at TechCorp.",
    time: "10:00 AM",
    status: "read",
  },
  {
    id: 2,
    sender: "other",
    text: "We were very impressed with your portfolio and experience. Would you be available for an initial phone screening?",
    time: "10:01 AM",
    status: "read",
  },
  {
    id: 3,
    sender: "me",
    text: "Hi Sarah! Thank you for reaching out. I'm very excited about this opportunity.",
    time: "10:15 AM",
    status: "read",
  },
  {
    id: 4,
    sender: "me",
    text: "Yes, I would love to schedule a phone screening. I'm available Monday through Wednesday next week, any time between 9 AM and 5 PM PST.",
    time: "10:16 AM",
    status: "read",
  },
  {
    id: 5,
    sender: "other",
    text: "Perfect! Let's schedule it for Monday at 10 AM PST. I'll send you a calendar invite with the meeting details.",
    time: "11:30 AM",
    status: "read",
  },
  {
    id: 6,
    sender: "me",
    text: "That works great for me. Thank you!",
    time: "11:32 AM",
    status: "read",
  },
  {
    id: 7,
    sender: "other",
    text: "Great! Looking forward to meeting you on Monday.",
    time: "11:35 AM",
    status: "read",
  },
]

export function ChatWindow({ conversationId }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState("")
  
  // In a real app, you'd fetch conversation data based on conversationId
  console.log("Conversation ID:", conversationId)

  const handleSend = () => {
    if (newMessage.trim()) {
      // Send message logic here
      setNewMessage("")
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Sarah Johnson" />
              <AvatarFallback className="bg-primary/10 text-primary">SJ</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-success border-2 border-card" />
          </div>
          <div>
            <h3 className="font-medium text-sm text-foreground">Sarah Johnson</h3>
            <p className="text-xs text-muted-foreground">HR Manager at TechCorp Inc.</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Video className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="text-center">
          <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
            Today
          </span>
        </div>

        {mockMessages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.sender === "me" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[70%] rounded-2xl px-4 py-2",
                message.sender === "me"
                  ? "bg-primary text-primary-foreground rounded-br-sm"
                  : "bg-secondary text-secondary-foreground rounded-bl-sm"
              )}
            >
              <p className="text-sm">{message.text}</p>
              <div
                className={cn(
                  "flex items-center justify-end gap-1 mt-1",
                  message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                )}
              >
                <span className="text-xs">{message.time}</span>
                {message.sender === "me" && (
                  message.status === "read" ? (
                    <CheckCheck className="h-3 w-3" />
                  ) : (
                    <Check className="h-3 w-3" />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <div className="relative flex-1">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="pr-10 bg-secondary border-none"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            >
              <Smile className="h-4 w-4" />
            </Button>
          </div>
          <Button size="icon" className="h-9 w-9 shrink-0" onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
