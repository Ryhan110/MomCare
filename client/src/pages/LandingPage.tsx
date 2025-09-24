import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, BarChart3, Smartphone, Shield, Globe } from "lucide-react";
import { useLocation } from "wouter";

export default function LandingPage() {
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Maternal Care Tracking",
      description: "Complete vaccination schedules and appointment reminders"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Simple Interface",
      description: "Easy-to-use design for rural mothers with limited tech experience"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Language Support",
      description: "Available in English, Hindi, and local languages"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "SMS & WhatsApp Reminders",
      description: "Automated notifications in preferred language"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics Dashboard",
      description: "Health officials can track compliance and high-risk cases"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Health Worker Tools",
      description: "QR scanning and follow-up management for caretakers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <h1 className="text-2xl font-bold text-primary">MomCare</h1>
            <Badge variant="secondary" className="ml-2">Prototype</Badge>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold leading-tight">
              Maternal & Newborn Care
              <br />
              <span className="text-primary">Reminder System</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Helping rural mothers track vaccinations, appointments, and receive timely 
              reminders for better maternal and newborn healthcare outcomes.
            </p>
          </div>

          {/* Demo Access Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="hover-elevate cursor-pointer" onClick={() => setLocation("/mother")}>
              <CardHeader className="text-center">
                <div className="mx-auto h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mother Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  View vaccination cards, upcoming appointments, and health tips
                </p>
                <Button className="w-full" data-testid="button-mother-demo">
                  View Mother Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate cursor-pointer" onClick={() => setLocation("/caretaker")}>
              <CardHeader className="text-center">
                <div className="mx-auto h-12 w-12 bg-chart-2/10 rounded-full flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle>Health Worker</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Manage patient visits, QR scanning, and follow-up reminders
                </p>
                <Button variant="outline" className="w-full" data-testid="button-caretaker-demo">
                  View Worker Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate cursor-pointer" onClick={() => setLocation("/health-official")}>
              <CardHeader className="text-center">
                <div className="mx-auto h-12 w-12 bg-chart-3/10 rounded-full flex items-center justify-center mb-2">
                  <BarChart3 className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle>Health Official</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Regional analytics, compliance tracking, and report generation
                </p>
                <Button variant="outline" className="w-full" data-testid="button-official-demo">
                  View Analytics Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Key Features</h3>
            <p className="text-muted-foreground">
              Designed specifically for rural maternal healthcare with simplicity and accessibility in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">Making a Difference</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary">85%</div>
              <p className="text-sm text-muted-foreground">Improved appointment compliance</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">90%</div>
              <p className="text-sm text-muted-foreground">On-time vaccination rates</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">95%</div>
              <p className="text-sm text-muted-foreground">Mother satisfaction scores</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}