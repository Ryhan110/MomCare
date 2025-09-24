import Header from "@/components/Header";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MapPin, 
  Calendar,
  Download,
  Filter
} from "lucide-react";

// Mock data for regional overview
const regionalData = [
  {
    id: "region-1",
    name: "North District",
    totalMothers: 156,
    compliance: 82,
    overdue: 28,
    workers: 12
  },
  {
    id: "region-2", 
    name: "South District",
    totalMothers: 134,
    compliance: 76,
    overdue: 32,
    workers: 10
  },
  {
    id: "region-3",
    name: "East District", 
    totalMothers: 98,
    compliance: 89,
    overdue: 11,
    workers: 8
  }
];

const monthlyStats = {
  thisMonth: {
    visits: 342,
    compliance: 84,
    newRegistrations: 23
  },
  lastMonth: {
    visits: 318,
    compliance: 79,
    newRegistrations: 19
  }
};

export default function HealthOfficialDashboard() {
  const visitChange = monthlyStats.thisMonth.visits - monthlyStats.lastMonth.visits;
  const complianceChange = monthlyStats.thisMonth.compliance - monthlyStats.lastMonth.compliance;

  return (
    <div className="min-h-screen bg-background">
      <Header userName="Dr. Patel" userType="health-official" notificationCount={12} />
      
      <main className="p-4 max-w-7xl mx-auto space-y-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Regional Health Overview</h2>
            <p className="text-muted-foreground">
              Monitoring maternal care across 3 districts
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" data-testid="button-filter">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button data-testid="button-export">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Monthly Performance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-total-visits">
                {monthlyStats.thisMonth.visits}
              </div>
              <div className="flex items-center text-xs">
                {visitChange > 0 ? (
                  <TrendingUp className="h-3 w-3 text-chart-2 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-destructive mr-1" />
                )}
                <span className={visitChange > 0 ? "text-chart-2" : "text-destructive"}>
                  {visitChange > 0 ? "+" : ""}{visitChange} from last month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-chart-2" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-compliance-rate">
                {monthlyStats.thisMonth.compliance}%
              </div>
              <div className="flex items-center text-xs">
                <TrendingUp className="h-3 w-3 text-chart-2 mr-1" />
                <span className="text-chart-2">
                  +{complianceChange}% from last month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Registrations</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-new-registrations">
                {monthlyStats.thisMonth.newRegistrations}
              </div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Regional Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              District Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {regionalData.map((region) => (
              <div 
                key={region.id}
                className="p-4 border rounded-md hover-elevate"
                data-testid={`card-region-${region.id}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold" data-testid={`text-region-name-${region.id}`}>
                      {region.name}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{region.totalMothers} mothers</span>
                      <span>{region.workers} health workers</span>
                    </div>
                  </div>
                  <Badge 
                    variant={region.compliance >= 80 ? "default" : "destructive"}
                    className={region.compliance >= 80 ? "bg-chart-2 text-white" : ""}
                    data-testid={`badge-compliance-${region.id}`}
                  >
                    {region.compliance}% Compliant
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Compliance Rate</span>
                    <span className="font-medium">{region.compliance}%</span>
                  </div>
                  <Progress value={region.compliance} className="h-2" />
                  
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{region.overdue} overdue visits</span>
                    <span>{region.totalMothers - region.overdue} up to date</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Detailed Analytics */}
        <AnalyticsDashboard />
      </main>
    </div>
  );
}