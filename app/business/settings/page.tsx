'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Save } from 'lucide-react';

export default function BusinessSettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-4 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Company Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your company profile and preferences</p>
        </div>

        <div className="space-y-6">
          {/* Company Information */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Company Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                <Input placeholder="Your company name" defaultValue="TechCorp Solutions" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Website</label>
                <Input placeholder="https://yourcompany.com" defaultValue="https://techcorp.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company Email</label>
                <Input placeholder="company@example.com" defaultValue="hr@techcorp.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <Input placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company Description</label>
                <Textarea
                  placeholder="Tell us about your company"
                  defaultValue="TechCorp Solutions is a leading technology company focused on innovation and excellence."
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
                <Input placeholder="e.g., Technology, Finance, Healthcare" defaultValue="Technology" />
              </div>
              <div className="flex gap-3">
                <Button className="gap-2">
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
              </div>
            </div>
          </Card>

          {/* Address Information */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Address Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Street Address</label>
                <Input placeholder="123 Main Street" defaultValue="456 Tech Avenue" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">City</label>
                  <Input placeholder="City" defaultValue="San Francisco" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">State</label>
                  <Input placeholder="State" defaultValue="CA" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Postal Code</label>
                  <Input placeholder="Postal Code" defaultValue="94105" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Country</label>
                  <Input placeholder="Country" defaultValue="United States" />
                </div>
              </div>
              <div className="flex gap-3">
                <Button className="gap-2">
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
              </div>
            </div>
          </Card>

          {/* Subscription & Billing */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Subscription & Billing</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div>
                  <p className="font-semibold text-foreground">Professional Plan</p>
                  <p className="text-sm text-muted-foreground">Unlimited job postings + Premium features</p>
                </div>
                <Badge className="bg-success">Active</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Next billing date: February 18, 2026</p>
                <p className="mt-1">Amount: $199/month</p>
              </div>
              <Button variant="outline">Manage Subscription</Button>
            </div>
          </Card>

          {/* Notifications */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              {[
                { label: 'New Applications', description: 'Get notified when someone applies for your job' },
                { label: 'Message Alerts', description: 'Receive alerts for new messages' },
                { label: 'Weekly Reports', description: 'Get weekly analytics and job posting reports' },
                { label: 'Marketing Updates', description: 'Receive updates about new features' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>
              ))}
            </div>
          </Card>

          {/* Team Members */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Team Members</h2>
            <div className="space-y-4">
              {[
                { name: 'John Smith', email: 'john@techcorp.com', role: 'Admin' },
                { name: 'Sarah Johnson', email: 'sarah@techcorp.com', role: 'Editor' },
                { name: 'Mike Davis', email: 'mike@techcorp.com', role: 'Viewer' },
              ].map((member) => (
                <div key={member.email} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">{member.role}</Badge>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
              <Button className="w-full">Add Team Member</Button>
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="p-6 border-destructive">
            <h2 className="text-xl font-semibold text-destructive mb-6">Danger Zone</h2>
            <div className="space-y-4">
              <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10 bg-transparent">
                Delete Company Account
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
