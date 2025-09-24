import { useState } from "react";
import Header from "@/components/Header";
import QuickActions from "@/components/QuickActions";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Phone, MessageSquare, AlertTriangle, Users } from "lucide-react";

// Mock data for recent mothers
const recentMothers = [
  {
    id: "1",
    name: "Priya Sharma",
    phone: "+91 9876543210",
    status: "due",
    nextVisit: "Today",
    riskLevel: "low"
  },
  {
    id: "2", 
    name: "Meera Patel",
    phone: "+91 9876543211",
    status: "overdue",
    nextVisit: "2 days ago",
    riskLevel: "high"
  },
  {
    id: "3",
    name: "Sita Devi",
    phone: "+91 9876543212", 
    status: "upcoming",
    nextVisit: "In 3 days",
    riskLevel: "low"
  }
];

export default function CaretakerDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "due":
        return "bg-chart-3 text-white";
      case "overdue":
        return "bg-destructive text-destructive-foreground";
      case "upcoming":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getRiskColor = (risk: string) => {
    return risk === "high" ? "text-destructive" : "text-muted-foreground";
  };

  const filteredMothers = recentMothers.filter(mother =>
    mother.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mother.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-background">
      <Header userName="Dr. Kumar" userType="caretaker" notificationCount={5} />
      
      <main className="p-4 max-w-6xl mx-auto space-y-6">
        {/* Welcome Section */}
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold mb-2">Health Worker Dashboard</h2>
          <p className="text-muted-foreground">
            Managing care for 48 mothers in your region
          </p>
        </div>

        {/* Quick Actions */}
        <QuickActions userType="caretaker" />

        {/* Mothers List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Recent Mothers
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search mothers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-64"
                  data-testid="input-search-mothers"
                />
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-3">
            {filteredMothers.map((mother) => (
              <div 
                key={mother.id}
                className="flex items-center justify-between p-3 border rounded-md hover-elevate"
                data-testid={`card-mother-${mother.id}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <h4 className="font-medium" data-testid={`text-mother-name-${mother.id}`}>
                      {mother.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {mother.phone}
                    </p>
                  </div>
                  {mother.riskLevel === "high" && (
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <Badge className={getStatusColor(mother.status)} data-testid={`badge-status-${mother.id}`}>
                      {mother.status}
                    </Badge>
                    <p className={`text-xs mt-1 ${getRiskColor(mother.riskLevel)}`}>
                      {mother.nextVisit}
                    </p>
                  </div>
                  
                  <div className="flex gap-1">
                    <Button 
                      size="icon" 
                      variant="outline"
                      data-testid={`button-call-${mother.id}`}
                    >
                      <Phone className="h-3 w-3" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="outline"
                      data-testid={`button-message-${mother.id}`}
                    >
                      <MessageSquare className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Analytics Section */}
        <AnalyticsDashboard />
      </main>
    </div>
  );
}