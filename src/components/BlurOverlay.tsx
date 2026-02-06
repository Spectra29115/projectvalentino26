import { Lock, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BlurOverlayProps {
  dayName: string;
  unlockDate: string;
  isLocked?: boolean;
}

const BlurOverlay = ({ dayName, unlockDate, isLocked = true }: BlurOverlayProps) => {
  if (!isLocked) return null;

  return (
    <div className="absolute inset-0 z-40 backdrop-blur-lg bg-background/60 flex items-center justify-center">
      <div className="text-center p-8 max-w-md">
        <div className="mb-6 relative">
          <Heart className="w-16 h-16 mx-auto text-primary animate-pulse-heart" />
          <Lock className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground" />
        </div>
        <h2 className="text-2xl md:text-3xl font-script text-primary mb-2">
          {dayName} is Locked
        </h2>
        <p className="text-muted-foreground mb-6">
          This special day unlocks on <span className="font-semibold text-foreground">{unlockDate}</span>
        </p>
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <Heart className="w-4 h-4" />
            Return to Proposal
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlurOverlay;
