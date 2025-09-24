import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Phone, 
  MessageSquare, 
  Plus, 
  QrCode, 
  Bell,
  Heart,
  MapPin
} from "lucide-react";

interface QuickActionsProps {
  userType?: "mother" | "caretaker";
  onScheduleAppointment?: () => void;
  onCallSupport?: () => void;
  onSendMessage?: () => void;
  onAddRecord?: () => void;
  onScanQR?: () => void;
  onSetReminder?: () => void;
  onViewTips?: () => void;
  onEmergencyContact?: () => void;
}

export default function QuickActions({
  userType = "mother",
  onScheduleAppointment = () => console.log("Schedule appointment"),
  onCallSupport = () => console.log("Call support"),
  onSendMessage = () => console.log("Send message"),
  onAddRecord = () => console.log("Add record"),
  onScanQR = () => console.log("Scan QR"),
  onSetReminder = () => console.log("Set reminder"),
  onViewTips = () => console.log("View health tips"),
  onEmergencyContact = () => console.log("Emergency contact")
}: QuickActionsProps) {
  
  const motherActions = [
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Schedule Visit",
      action: onScheduleAppointment,
      variant: "default" as const,
      testId: "button-schedule-appointment"
    },
    {
      icon: <Bell className="h-5 w-5" />,
      label: "Set Reminder",
      action: onSetReminder,
      variant: "outline" as const,
      testId: "button-set-reminder"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      label: "Health Tips",
      action: onViewTips,
      variant: "outline" as const,
      testId: "button-health-tips"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Call Support",
      action: onCallSupport,
      variant: "outline" as const,
      testId: "button-call-support"
    }
  ];

  const caretakerActions = [
    {
      icon: <QrCode className="h-5 w-5" />,
      label: "Scan QR Code",
      action: onScanQR,
      variant: "default" as const,
      testId: "button-scan-qr"
    },
    {
      icon: <Plus className="h-5 w-5" />,
      label: "Add Record",
      action: onAddRecord,
      variant: "outline" as const,
      testId: "button-add-record"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "Send Message",
      action: onSendMessage,
      variant: "outline" as const,
      testId: "button-send-message"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Call Mother",
      action: onCallSupport,
      variant: "outline" as const,
      testId: "button-call-mother"
    }
  ];

  const actions = userType === "mother" ? motherActions : caretakerActions;

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              onClick={action.action}
              className="h-auto py-3 px-4 flex flex-col items-center gap-2"
              data-testid={action.testId}
            >
              {action.icon}
              <span className="text-sm font-medium">{action.label}</span>
            </Button>
          ))}
        </div>
        
        {/* Emergency Contact - Available for both user types */}
        <div className="mt-4 pt-3 border-t">
          <Button
            variant="destructive"
            onClick={onEmergencyContact}
            className="w-full flex items-center gap-2"
            data-testid="button-emergency-contact"
          >
            <MapPin className="h-4 w-4" />
            Emergency - Call Nearest Clinic
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}