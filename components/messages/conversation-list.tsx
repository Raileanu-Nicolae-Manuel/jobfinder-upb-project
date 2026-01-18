"use client"

import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const conversations = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    avatar: "/placeholder-avatar.jpg",
    lastMessage: "Great! Looking forward to meeting you on Monday.",
    time: "2m ago",
    unread: 2,
    isOnline: true,
  },
  {
    id: "2",
    name: "Michael Chen",
    company: "DesignStudio",
    avatar: "/placeholder-avatar.jpg",
    lastMessage: "Thanks for applying! We'd like to schedule a call.",
    time: "1h ago",
    unread: 0,
    isOnline: true,
  },
  {
    id: "3",
    name: "Emily Davis",
    company: "DataFlow Systems",
    avatar: "/placeholder-avatar.jpg",
    lastMessage: "Could you provide more details about your experience?",
    time: "3h ago",
    unread: 1,
    isOnline: false,
  },
  {
    id: "4",
    name: "James Wilson",
    company: "CloudScale",
    avatar: "/placeholder-avatar.jpg",
    lastMessage: "The interview has been rescheduled to next week.",
    time: "1d ago",
    unread: 0,
    isOnline: false,
  },
  {
    id: "5",
    name: "Lisa Anderson",
    company: "InnovateTech",
    avatar: "/placeholder-avatar.jpg",
    lastMessage: "We have reviewed your application and would like...",
    time: "2d ago",
    unread: 0,
    isOnline: true,
  },
]

interface ConversationListProps {
  selectedId: string | null
  onSelect: (id: string) => void
}

export function ConversationList({ selectedId, onSelect }: ConversationListProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Messages</h2>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            className="pl-9 bg-secondary border-none"
          />
        </div>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelect(conversation.id)}
            className={cn(
              "w-full p-4 flex items-start gap-3 hover:bg-secondary/50 transition-colors text-left",
              selectedId === conversation.id && "bg-secondary"
            )}
          >
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {conversation.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              {conversation.isOnline && (
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-success border-2 border-card" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium text-sm text-foreground truncate">
                  {conversation.name}
                </span>
                <span className="text-xs text-muted-foreground shrink-0">
                  {conversation.time}
                </span>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                {conversation.company}
              </p>
              <div className="flex items-center justify-between gap-2 mt-1">
                <p className="text-sm text-muted-foreground truncate">
                  {conversation.lastMessage}
                </p>
                {conversation.unread > 0 && (
                  <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs shrink-0">
                    {conversation.unread}
                  </Badge>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
