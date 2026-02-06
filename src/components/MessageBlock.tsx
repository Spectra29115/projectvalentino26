import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageBlockProps {
  // CUSTOMIZATION: Edit this message in the code
  message: string;
  variant?: "default" | "pink" | "cream" | "gradient";
  className?: string;
}

const MessageBlock = ({ message, variant = "default", className }: MessageBlockProps) => {
  const variantStyles = {
    default: "bg-card border border-border",
    pink: "bg-valentine-pink-light border border-valentine-pink/20",
    cream: "bg-valentine-cream border border-valentine-orange/20",
    gradient: "valentine-gradient text-primary-foreground",
  };

  return (
    <div 
      className={cn(
        "rounded-xl p-6 text-center",
        variantStyles[variant],
        className
      )}
    >
      <Heart className={cn(
        "w-8 h-8 mx-auto mb-4",
        variant === "gradient" ? "text-primary-foreground" : "text-primary"
      )} />
      <p className={cn(
        "text-sm md:text-base italic leading-relaxed",
        variant === "gradient" ? "text-primary-foreground" : "text-foreground"
      )}>
        "{message}"
      </p>
    </div>
  );
};

export default MessageBlock;
