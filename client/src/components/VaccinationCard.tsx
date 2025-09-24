import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, AlertCircle, Plus } from "lucide-react";

interface Vaccination {
  id: string;
  name: string;
  dueDate: string;
  status: "completed" | "due" | "overdue" | "upcoming";
  completedDate?: string;
}

interface VaccinationCardProps {
  babyName?: string;
  vaccinations?: Vaccination[];
  onMarkComplete?: (vaccinationId: string) => void;
  onSchedule?: (vaccinationId: string) => void;
}

const defaultVaccinations: Vaccination[] = [
  { id: "bcg", name: "BCG", dueDate: "At birth", status: "completed", completedDate: "Jan 10, 2025" },
  { id: "opv1", name: "OPV-1", dueDate: "6 weeks", status: "completed", completedDate: "Feb 20, 2025" },
  { id: "dpt1", name: "DPT-1", dueDate: "6 weeks", status: "due", },
  { id: "hepb1", name: "HepB-1", dueDate: "6 weeks", status: "overdue" },
  { id: "opv2", name: "OPV-2", dueDate: "10 weeks", status: "upcoming" },
];

export default function VaccinationCard({
  babyName = "Baby",
  vaccinations = defaultVaccinations,
  onMarkComplete = (id: string) => console.log(`Mark ${id} complete`),
  onSchedule = (id: string) => console.log(`Schedule ${id}`)
}: VaccinationCardProps) {
  
  const getStatusIcon = (status: Vaccination["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-chart-2" />;
      case "due":
        return <Clock className="h-4 w-4 text-chart-3" />;
      case "overdue":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case "upcoming":
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: Vaccination["status"]) => {
    switch (status) {
      case "completed":
        return <Badge variant="default" className="bg-chart-2 text-white">Completed</Badge>;
      case "due":
        return <Badge variant="default" className="bg-chart-3 text-white">Due Now</Badge>;
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>;
      case "upcoming":
        return <Badge variant="secondary">Upcoming</Badge>;
    }
  };

  const completedCount = vaccinations.filter(v => v.status === "completed").length;
  const totalCount = vaccinations.length;

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg" data-testid="text-vaccination-title">
            {babyName}'s Vaccination Card
          </CardTitle>
          <Badge variant="outline" data-testid="text-vaccination-progress">
            {completedCount}/{totalCount} Complete
          </Badge>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {vaccinations.map((vaccination) => (
          <div 
            key={vaccination.id}
            className="flex items-center justify-between p-3 border rounded-md hover-elevate"
            data-testid={`card-vaccination-${vaccination.id}`}
          >
            <div className="flex items-center gap-3">
              {getStatusIcon(vaccination.status)}
              <div>
                <p className="font-medium" data-testid={`text-vaccination-name-${vaccination.id}`}>
                  {vaccination.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  Due: {vaccination.dueDate}
                </p>
                {vaccination.completedDate && (
                  <p className="text-xs text-chart-2">
                    Completed: {vaccination.completedDate}
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {getStatusBadge(vaccination.status)}
              {vaccination.status !== "completed" && (
                <Button 
                  size="sm" 
                  variant={vaccination.status === "overdue" ? "destructive" : "default"}
                  onClick={() => vaccination.status === "upcoming" ? onSchedule(vaccination.id) : onMarkComplete(vaccination.id)}
                  data-testid={`button-vaccination-action-${vaccination.id}`}
                >
                  {vaccination.status === "upcoming" ? (
                    <>
                      <Plus className="h-3 w-3 mr-1" />
                      Schedule
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Mark Done
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}