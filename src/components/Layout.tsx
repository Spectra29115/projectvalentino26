import { Link, useLocation } from "react-router-dom";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Proposal", emoji: "💝", color: "bg-valentine-pink" },
  { path: "/rose-day", label: "Rose Day", emoji: "🌹", color: "bg-valentine-rose" },
  { path: "/chocolate-day", label: "Chocolate Day", emoji: "🍫", color: "bg-valentine-brown" },
  { path: "/teddy-day", label: "Teddy Day", emoji: "🧸", color: "bg-valentine-orange" },
  { path: "/promise-day", label: "Promise Day", emoji: "🤞", color: "bg-valentine-purple" },
  { path: "/hug-day", label: "Hug Day", emoji: "🤗", color: "bg-valentine-teal" },
  { path: "/kiss-day", label: "Kiss Day", emoji: "💋", color: "bg-valentine-pink" },
  { path: "/valentines-day", label: "Valentine's", emoji: "❤️", color: "bg-valentine-red" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-primary font-semibold">
              <Heart className="w-5 h-5 fill-current" />
              <span className="hidden sm:inline text-lg">Valentine's Week</span>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center gap-1 md:gap-2 overflow-x-auto scrollbar-hide">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-1 px-2 py-1.5 md:px-3 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap",
                      isActive
                        ? `${item.color} text-primary-foreground shadow-md`
                        : "hover:bg-accent text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span>{item.emoji}</span>
                    <span className="hidden lg:inline">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
