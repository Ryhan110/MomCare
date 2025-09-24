import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Menu, Sun, Moon } from "lucide-react";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  userName?: string;
  userType?: "mother" | "caretaker" | "health-official";
  notificationCount?: number;
  onMenuToggle?: () => void;
  onNotificationClick?: () => void;
}

export default function Header({
  userName = "Priya",
  userType = "mother",
  notificationCount = 2,
  onMenuToggle = () => console.log("Menu toggled"),
  onNotificationClick = () => console.log("Notifications clicked")
}: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    console.log(`Theme switched to: ${!isDark ? "dark" : "light"}`);
  };

  const getRoleDisplay = (type: string) => {
    switch (type) {
      case "mother":
        return "Mother";
      case "caretaker":
        return "Health Worker";
      case "health-official":
        return "Health Official";
      default:
        return "User";
    }
  };

  return (
    <header className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center gap-3">
        <Button 
          size="icon" 
          variant="ghost" 
          onClick={onMenuToggle}
          data-testid="button-menu-toggle"
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">M</span>
          </div>
          <h1 className="text-xl font-bold text-primary">MomCare</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <LanguageSelector />
        
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleTheme}
          data-testid="button-theme-toggle"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>

        <Button
          size="icon"
          variant="ghost"
          onClick={onNotificationClick}
          className="relative"
          data-testid="button-notifications"
        >
          <Bell className="h-4 w-4" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center">
              {notificationCount > 9 ? "9+" : notificationCount}
            </span>
          )}
        </Button>

        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">
              {userName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="hidden sm:block">
            <p className="text-sm font-medium" data-testid="text-user-name">{userName}</p>
            <p className="text-xs text-muted-foreground">{getRoleDisplay(userType)}</p>
          </div>
        </div>
      </div>
    </header>
  );
}