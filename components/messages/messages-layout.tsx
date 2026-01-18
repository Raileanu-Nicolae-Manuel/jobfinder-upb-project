"use client"

import { useState } from "react"
import { ConversationList } from "./conversation-list"
import { ChatWindow } from "./chat-window"
import { Card } from "@/components/ui/card"

export function MessagesLayout() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1")

  return (
    <Card className="h-[calc(100vh-12rem)] overflow-hidden">
      <div className="grid h-full md:grid-cols-3">
        {/* Conversation List */}
        <div className="border-r border-border md:col-span-1">
          <ConversationList
            selectedId={selectedConversation}
            onSelect={setSelectedConversation}
          />
        </div>

        {/* Chat Window */}
        <div className="md:col-span-2 hidden md:flex flex-col">
          {selectedConversation ? (
            <ChatWindow conversationId={selectedConversation} />
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              Select a conversation to start messaging
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
