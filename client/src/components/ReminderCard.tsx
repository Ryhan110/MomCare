import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, CheckCircle2, RotateCcw } from "lucide-react";

interface Reminder {
  id: string;
  type: "antenatal" | "postnatal" | "vaccination" | "delivery";
  title: string;
  date: string;
  time: string;
  location?: string;
  status: "upcoming" | "due" | "overdue";
  daysUntil: number;
}

interface ReminderCardProps {
  reminders?: Reminder[];
  onConfirm?: (reminderId: string) => void;
  onReschedule?: (reminderId: string) => void;
}

const defaultReminders: Reminder[] = [
  {
    id: "1",
    type: "antenatal",
    title: "Antenatal Checkup",
    date: "March 25, 2025",
    time: "10:00 AM",
    location: "Primary Health Center",
    status: "due",
    daysUntil: 0
  },
  {
    id: "2",
    type: "vaccination",
    title: "DPT-1 Vaccination",
    date: "March 28, 2025",
    time: "11:00 AM",
    location: "Community Health Center",
    status: "upcoming",
    daysUntil: 3
  }
];

export default function ReminderCard({
  reminders = defaultReminders,
  onConfirm = (id: string) => console.log(`Confirmed reminder: ${id}`),
  onReschedule = (id: string) => console.log(`Reschedule reminder: ${id}`)
}: ReminderCardProps) {

  const getTypeColor = (type: Reminder["type"]) => {
    switch (type) {
      case "antenatal":
        return "bg-primary text-primary-foreground";
      case "postnatal":
        return "bg-chart-2 text-white";
      case "vaccination":
        return "bg-chart-3 text-white";
      case "delivery":
        return "bg-chart-4 text-white";
    }
  };

  const getStatusColor = (status: Reminder["status"]) => {
    switch (status) {
      case "upcoming":
        return "text-muted-foreground";
      case "due":
        return "text-chart-3";
      case "overdue":
        return "text-destructive";
    }
  };

  const getUrgencyMessage = (daysUntil: number, status: Reminder["status"]) => {
    if (status === "overdue") return "Overdue";
    if (daysUntil === 0) return "Today";
    if (daysUntil === 1) return "Tomorrow";
    return `In ${daysUntil} days`;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Upcoming Reminders
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {reminders.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Calendar className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>No upcoming reminders</p>
          </div>
        ) : (
          reminders.map((reminder) => (
            <div 
              key={reminder.id}
              className="p-4 border rounded-md hover-elevate"
              data-testid={`card-reminder-${reminder.id}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className={getTypeColor(reminder.type)} data-testid={`badge-reminder-type-${reminder.id}`}>
                      {reminder.type.charAt(0).toUpperCase() + reminder.type.slice(1)}
                    </Badge>
                    <span className={`text-sm font-medium ${getStatusColor(reminder.status)}`}>
                      {getUrgencyMessage(reminder.daysUntil, reminder.status)}
                    </span>
                  </div>
                  <h4 className="font-semibold text-base" data-testid={`text-reminder-title-${reminder.id}`}>
                    {reminder.title}
                  </h4>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span data-testid={`text-reminder-date-${reminder.id}`}>{reminder.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span data-testid={`text-reminder-time-${reminder.id}`}>{reminder.time}</span>
                </div>
                {reminder.location && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span data-testid={`text-reminder-location-${reminder.id}`}>{reminder.location}</span>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Button 
                  size="sm"
                  onClick={() => onConfirm(reminder.id)}
                  data-testid={`button-confirm-${reminder.id}`}
                  className="flex-1"
                >
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Confirm
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => onReschedule(reminder.id)}
                  data-testid={`button-reschedule-${reminder.id}`}
                  className="flex-1"
                >
                  <RotateCcw className="h-3 w-3 mr-1" />
                  Reschedule
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}