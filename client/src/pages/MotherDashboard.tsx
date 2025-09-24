import Header from "@/components/Header";
import MotherProfile from "@/components/MotherProfile";
import VaccinationCard from "@/components/VaccinationCard";
import ReminderCard from "@/components/ReminderCard";
import BadgeShowcase from "@/components/BadgeShowcase";
import QuickActions from "@/components/QuickActions";

export default function MotherDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header userName="Priya Sharma" userType="mother" notificationCount={2} />
      
      <main className="p-4 max-w-4xl mx-auto space-y-6">
        {/* Welcome Section */}
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold mb-2">Welcome back, Priya!</h2>
          <p className="text-muted-foreground">
            Your next checkup is in 2 days. Stay healthy!
          </p>
        </div>

        {/* Quick Actions */}
        <QuickActions userType="mother" />

        {/* Profile and Reminders Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          <MotherProfile
            name="Priya Sharma"
            phone="+91 9876543210"
            expectedDeliveryDate="March 15, 2025"
            pregnancyWeek={28}
            streakDays={15}
          />
          <ReminderCard />
        </div>

        {/* Vaccination and Badges Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          <VaccinationCard babyName="Arjun" />
          <BadgeShowcase streakDays={15} />
        </div>

        {/* Health Tips Section */}
        <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
          <h3 className="text-lg font-semibold mb-3 text-primary">Today's Health Tip</h3>
          <p className="text-sm leading-relaxed">
            "Eat iron-rich foods like spinach, dates, and jaggery to prevent anemia during pregnancy. 
            Also, take your prescribed iron supplements daily after meals."
          </p>
          <div className="mt-3 text-xs text-muted-foreground">
            Tip #247 • Nutrition during pregnancy
          </div>
        </div>
      </main>
    </div>
  );
}