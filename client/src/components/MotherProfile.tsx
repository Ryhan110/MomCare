import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Baby, Edit3 } from "lucide-react";

interface MotherProfileProps {
  name: string;
  phone: string;
  expectedDeliveryDate?: string;
  babyDob?: string;
  pregnancyWeek?: number;
  streakDays: number;
  onEdit?: () => void;
}

export default function MotherProfile({
  name,
  phone,
  expectedDeliveryDate,
  babyDob,
  pregnancyWeek,
  streakDays,
  onEdit = () => console.log("Edit profile clicked")
}: MotherProfileProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold" data-testid="text-mother-name">{name}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Phone className="h-3 w-3" />
              <span data-testid="text-phone-number">{phone}</span>
            </div>
          </div>
        </div>
        <Button size="icon" variant="ghost" onClick={onEdit} data-testid="button-edit-profile">
          <Edit3 className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          {expectedDeliveryDate && (
            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
              <Calendar className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-medium">Expected Delivery</p>
                <p className="text-sm text-muted-foreground" data-testid="text-delivery-date">
                  {expectedDeliveryDate}
                </p>
                {pregnancyWeek && (
                  <Badge variant="secondary" className="mt-1">
                    Week {pregnancyWeek}
                  </Badge>
                )}
              </div>
            </div>
          )}
          
          {babyDob && (
            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
              <Baby className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-medium">Baby's Date of Birth</p>
                <p className="text-sm text-muted-foreground" data-testid="text-baby-dob">
                  {babyDob}
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between p-3 bg-chart-2/10 rounded-md">
          <div>
            <p className="text-sm font-medium text-chart-2">Visit Streak</p>
            <p className="text-xs text-muted-foreground">On-time visits</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-chart-2" data-testid="text-streak-count">{streakDays}</p>
            <p className="text-xs text-chart-2">days</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}