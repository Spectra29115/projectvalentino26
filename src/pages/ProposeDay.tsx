import { Heart, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ValentineNav from "@/components/ValentineNav";
import ImageBlock from "@/components/ImageBlock";
import MessageBlock from "@/components/MessageBlock";
import { Link } from "react-router-dom";

// ═══════════════════════════════════════════════════════════════════════════
// CUSTOMIZATION SECTION - Edit your image path and messages here
// ═══════════════════════════════════════════════════════════════════════════

const CUSTOM_IMAGE = "/Images/image_ProposeDay.jpeg"; // Add your image to public/Images/
const CUSTOM_MESSAGE = "Write your heartfelt proposal message here...";
const BOTTOM_MESSAGE = "Every love story is beautiful, but ours is my favorite. 💕";

// ═══════════════════════════════════════════════════════════════════════════

const loveEmojis = ["💖", "💝", "💗", "💓", "💞", "💕"];

const ProposeDay = () => {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-br from-love-soft via-secondary to-accent relative overflow-hidden">
      {/* Floating hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl sm:text-3xl opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `fall ${Math.random() * 5 + 8}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {loveEmojis[Math.floor(Math.random() * loveEmojis.length)]}
          </div>
        ))}
      </div>

      <ValentineNav />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero */}
          <div className="mb-8 sm:mb-12">
            <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 animate-pulse-love">💍</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-romantic text-primary mb-3 sm:mb-4 leading-tight">
              Propose Day
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-elegant italic px-4">
              February 8th - The day to speak your heart
            </p>
          </div>

          {/* Main Card */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-primary/20 mb-6 sm:mb-8">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-6 sm:space-y-8">
                {/* Proposal Banner */}
                <div className="bg-gradient-to-br from-primary to-love-rose p-4 sm:p-6 md:p-8 rounded-2xl text-white">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6" />
                    <h2 className="text-2xl sm:text-3xl font-romantic">
                      Will You Be Mine? 💕
                    </h2>
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                    {loveEmojis.map((emoji, i) => (
                      <div 
                        key={i}
                        className="bg-white/20 p-2 sm:p-4 rounded-xl text-2xl sm:text-4xl hover:scale-110 transition-transform cursor-pointer animate-float"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      >
                        {emoji}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Message Block */}
                <div className="bg-gradient-to-br from-love-soft to-secondary p-4 sm:p-6 rounded-xl">
                  <h3 className="text-xl sm:text-2xl font-romantic text-primary mb-3 sm:mb-4 flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5 fill-current" />
                    My Heart's Words
                    <Heart className="w-5 h-5 fill-current" />
                  </h3>
                  <p className="font-elegant italic text-base sm:text-lg leading-relaxed text-foreground">
                    "{CUSTOM_MESSAGE}"
                  </p>
                </div>

                {/* Custom Image Block */}
                <div className="max-w-3xl mx-auto">
                  <ImageBlock
                    imageSrc={CUSTOM_IMAGE}
                    placeholder="Add your special photo here"
                    alt="Proposal Day Memory"
                  />
                </div>

                {/* Bottom Love Message */}
                <MessageBlock message={BOTTOM_MESSAGE} variant="pink" />
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 max-w-md mx-auto">
            <Link to="/rose-day" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Rose Day
              </Button>
            </Link>
            <Link to="/chocolate-day" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                Chocolate Day
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProposeDay;
