import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Building2, Globe, ExternalLink } from "lucide-react"
import Link from "next/link"

export function JobCompanyInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">About the Company</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 rounded-lg">
            <AvatarImage src="/placeholder-company.jpg" alt="TechCorp Inc." />
            <AvatarFallback className="rounded-lg bg-primary/10 text-primary">
              TC
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-foreground">TechCorp Inc.</h3>
            <p className="text-sm text-muted-foreground">Technology</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          TechCorp is a leading technology company building innovative SaaS solutions 
          for businesses worldwide. We are passionate about creating products that help 
          teams work more efficiently.
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>San Francisco, CA (Headquarters)</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 shrink-0" />
            <span>201-500 employees</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="h-4 w-4 shrink-0" />
            <span>Founded 2015</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Globe className="h-4 w-4 shrink-0" />
            <a href="https://techcorp.example.com" className="hover:text-primary transition-colors">
              techcorp.example.com
            </a>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
            <Link href="/companies/techcorp">
              View Profile
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
