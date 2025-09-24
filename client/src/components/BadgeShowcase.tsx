import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Award, Flame, Heart } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  earned: boolean;
  earnedDate?: string;
}

interface BadgeShowcaseProps {
  achievements?: Achievement[];
  streakDays?: number;
}

const defaultAchievements: Achievement[] = [
  {
    id: "first-visit",
    title: "First Steps",
    description: "Completed your first checkup",
    icon: <Star className="h-4 w-4" />,
    earned: true,
    earnedDate: "Jan 15, 2025"
  },
  {
    id: "on-time-hero",
    title: "On-time Hero",
    description: "Never missed an appointment",
    icon: <Trophy className="h-4 w-4" />,
    earned: true,
    earnedDate: "Feb 20, 2025"
  },
  {
    id: "vaccination-champion",
    title: "Vaccination Champion",
    description: "Completed all scheduled vaccinations",
    icon: <Award className="h-4 w-4" />,
    earned: false
  },
  {
    id: "streak-master",
    title: "Streak Master",
    description: "Maintained 30-day streak",
    icon: <Target className="h-4 w-4" />,
    earned: false
  }
];

export default function BadgeShowcase({
  achievements = defaultAchievements,
  streakDays = 15
}: BadgeShowcaseProps) {
  const earnedCount = achievements.filter(a => a.earned).length;
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-chart-5" />
          Your Achievements
        </CardTitle>
        <div className="flex items-center gap-4">
          <Badge variant="outline" data-testid="text-achievements-count">
            {earnedCount}/{achievements.length} Badges Earned
          </Badge>
          <div className="flex items-center gap-1 text-sm">
            <Flame className="h-4 w-4 text-chart-3" />
            <span className="font-medium" data-testid="text-streak-display">{streakDays} day streak</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-3 rounded-md border transition-all ${
                achievement.earned 
                  ? 'bg-chart-5/10 border-chart-5/20 hover-elevate' 
                  : 'bg-muted/30 border-muted opacity-60'
              }`}
              data-testid={`card-badge-${achievement.id}`}
            >
              <div className="flex items-start gap-2 mb-2">
                <div className={`p-1 rounded ${
                  achievement.earned 
                    ? 'bg-chart-5 text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {achievement.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium text-sm leading-tight ${
                    achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                  }`} data-testid={`text-badge-title-${achievement.id}`}>
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">
                    {achievement.description}
                  </p>
                  {achievement.earned && achievement.earnedDate && (
                    <p className="text-xs text-chart-5 mt-1 font-medium">
                      Earned {achievement.earnedDate}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-primary/10 rounded-md border border-primary/20">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-primary" />
            <p className="text-sm font-medium text-primary">
              "Every checkup brings you closer to a healthy baby!"
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}