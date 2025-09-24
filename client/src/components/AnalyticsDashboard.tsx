import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Download, AlertTriangle, TrendingUp, Users, Calendar } from "lucide-react";

interface AnalyticsData {
  totalMothers: number;
  upToDate: number;
  overdue: number;
  highRisk: number;
  monthlyTrend: {
    month: string;
    compliance: number;
  }[];
}

interface AnalyticsDashboardProps {
  data?: AnalyticsData;
  onDownloadReport?: () => void;
  onViewHighRisk?: () => void;
}

const defaultData: AnalyticsData = {
  totalMothers: 248,
  upToDate: 186,
  overdue: 45,
  highRisk: 17,
  monthlyTrend: [
    { month: "Dec", compliance: 78 },
    { month: "Jan", compliance: 82 },
    { month: "Feb", compliance: 75 },
    { month: "Mar", compliance: 85 }
  ]
};

export default function AnalyticsDashboard({
  data = defaultData,
  onDownloadReport = () => console.log("Download report clicked"),
  onViewHighRisk = () => console.log("View high-risk mothers clicked")
}: AnalyticsDashboardProps) {
  const compliancePercentage = Math.round((data.upToDate / data.totalMothers) * 100);
  const overduePercentage = Math.round((data.overdue / data.totalMothers) * 100);
  const highRiskPercentage = Math.round((data.highRisk / data.totalMothers) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Health Analytics Dashboard</h2>
          <p className="text-muted-foreground">Overview of maternal care compliance</p>
        </div>
        <Button onClick={onDownloadReport} data-testid="button-download-report">
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Mothers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-total-mothers">{data.totalMothers}</div>
            <p className="text-xs text-muted-foreground">Registered in system</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Up to Date</CardTitle>
            <TrendingUp className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-2" data-testid="text-up-to-date">
              {data.upToDate}
            </div>
            <p className="text-xs text-chart-2">{compliancePercentage}% compliance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <Calendar className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-3" data-testid="text-overdue">
              {data.overdue}
            </div>
            <p className="text-xs text-chart-3">{overduePercentage}% of total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive" data-testid="text-high-risk">
              {data.highRisk}
            </div>
            <p className="text-xs text-destructive">{highRiskPercentage}% need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Compliance Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Up to Date</span>
              <span className="font-medium">{compliancePercentage}%</span>
            </div>
            <Progress value={compliancePercentage} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overdue</span>
              <span className="font-medium">{overduePercentage}%</span>
            </div>
            <Progress value={overduePercentage} className="h-2 bg-chart-3/20">
              <div 
                className="h-full bg-chart-3 transition-all"
                style={{ width: `${overduePercentage}%` }}
              />
            </Progress>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>High Risk</span>
              <span className="font-medium">{highRiskPercentage}%</span>
            </div>
            <Progress value={highRiskPercentage} className="h-2 bg-destructive/20">
              <div 
                className="h-full bg-destructive transition-all"
                style={{ width: `${highRiskPercentage}%` }}
              />
            </Progress>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Compliance Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between h-32 gap-2">
            {data.monthlyTrend.map((month, index) => (
              <div key={month.month} className="flex flex-col items-center gap-2 flex-1">
                <div className="text-xs font-medium">{month.compliance}%</div>
                <div 
                  className="w-full bg-primary rounded-t transition-all"
                  style={{ height: `${month.compliance}%` }}
                />
                <div className="text-xs text-muted-foreground">{month.month}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* High Risk Alert */}
      {data.highRisk > 0 && (
        <Card className="border-destructive/20 bg-destructive/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <div>
                  <h4 className="font-semibold text-destructive">High Risk Mothers Require Attention</h4>
                  <p className="text-sm text-muted-foreground">
                    {data.highRisk} mothers have missed multiple appointments
                  </p>
                </div>
              </div>
              <Button variant="destructive" onClick={onViewHighRisk} data-testid="button-view-high-risk">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}