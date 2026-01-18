import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function JobDescription() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Job Description</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-2">About the Role</h3>
          <p className="text-muted-foreground leading-relaxed">
            We are looking for a Senior Frontend Developer to join our growing engineering team. 
            You will be responsible for building and maintaining our flagship SaaS product, 
            working closely with designers and backend engineers to deliver exceptional user experiences.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">Responsibilities</h3>
          <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
            <li>Lead the development of new features and improvements to our web application</li>
            <li>Architect and implement scalable, maintainable frontend solutions</li>
            <li>Collaborate with UX designers to translate designs into pixel-perfect interfaces</li>
            <li>Mentor junior developers and conduct code reviews</li>
            <li>Participate in technical discussions and help shape our engineering practices</li>
            <li>Optimize application performance and ensure cross-browser compatibility</li>
            <li>Write clean, well-tested, and documented code</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">Requirements</h3>
          <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
            <li>5+ years of experience in frontend development</li>
            <li>Expert knowledge of React and TypeScript</li>
            <li>Experience with Next.js and modern React patterns (hooks, context, etc.)</li>
            <li>Strong understanding of HTML, CSS, and responsive design</li>
            <li>Experience with state management solutions (Redux, Zustand, etc.)</li>
            <li>Familiarity with testing frameworks (Jest, React Testing Library)</li>
            <li>Excellent communication and collaboration skills</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">Nice to Have</h3>
          <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
            <li>Experience with GraphQL and Apollo Client</li>
            <li>Knowledge of CI/CD pipelines and DevOps practices</li>
            <li>Contributions to open source projects</li>
            <li>Experience with design systems and component libraries</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">Benefits</h3>
          <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
            <li>Competitive salary and equity package</li>
            <li>Comprehensive health, dental, and vision insurance</li>
            <li>Flexible work arrangements (remote-friendly)</li>
            <li>Unlimited PTO policy</li>
            <li>Professional development budget</li>
            <li>Home office stipend</li>
            <li>401(k) with company match</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
