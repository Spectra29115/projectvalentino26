import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import BlurOverlay from "@/components/BlurOverlay";
import ImageBlock from "@/components/ImageBlock";
import MessageBlock from "@/components/MessageBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ═══════════════════════════════════════════════════════════════════════════
// CUSTOMIZATION SECTION
// ═══════════════════════════════════════════════════════════════════════════

const IS_LOCKED = true;
const CUSTOM_IMAGE = "";
const CUSTOM_MESSAGE = `Your lips, a poetry I long to read,
Each kiss, a chapter of love indeed.
In that tender moment when our lips meet,
Time stands still, making life so sweet.`;
const BOTTOM_MESSAGE = "Every kiss from you is a promise of forever, a whisper of love, and a moment I'll treasure always. Happy Valentine's Week! 💕";

// ═══════════════════════════════════════════════════════════════════════════

const kissTypes = [
  { emoji: "💋", name: "Romantic Kiss" },
  { emoji: "😘", name: "Blown Kiss" },
  { emoji: "🥰", name: "Sweet Kiss" },
  { emoji: "😗", name: "Gentle Peck" },
];

const KissDay = () => {
  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-valentine-pink-light to-background">
        <BlurOverlay dayName="Kiss Day" unlockDate="February 13th" isLocked={IS_LOCKED} />

        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="text-center mb-8 md:mb-12">
            <span className="text-5xl md:text-6xl block mb-4 animate-float">💋</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-script text-primary mb-2">
              Kiss Day
            </h1>
            <p className="text-muted-foreground text-sm md:text-base italic">
              February 13th - The language of love, spoken without words
            </p>
          </div>

          {/* Sealed with a Kiss */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg">
            <CardContent className="p-6 md:p-8 text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                Sealed with a Kiss 💋
              </h2>
              <div className="text-4xl mb-4">🥰 💕 😘 ✨</div>
              
              {/* Kiss Types */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                {kissTypes.map((kiss, i) => (
                  <div 
                    key={i} 
                    className="p-3 bg-valentine-pink-light rounded-lg text-center"
                  >
                    <span className="text-2xl block mb-1">{kiss.emoji}</span>
                    <span className="text-xs text-muted-foreground">{kiss.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* A Kiss to Remember */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg">
            <CardContent className="p-6 md:p-8 text-center">
              <Heart className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-3">
                A Kiss to Remember 💕
              </h3>
              <p className="text-muted-foreground text-sm italic whitespace-pre-line max-w-md mx-auto">
                "{CUSTOM_MESSAGE}"
              </p>
            </CardContent>
          </Card>

          {/* Image Block */}
          <div className="max-w-3xl mx-auto mb-6">
            <ImageBlock 
              imageSrc={CUSTOM_IMAGE} 
              placeholder="Add a romantic kiss day photo here"
            />
          </div>

          {/* Closing */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="text-3xl mb-3">💋 ❤️ 💋</div>
              <MessageBlock message={BOTTOM_MESSAGE} variant="pink" />
            </CardContent>
          </Card>

          {/* Valentine's Day Teaser */}
          <Card className="max-w-3xl mx-auto mb-8 valentine-gradient shadow-xl">
            <CardContent className="p-6 md:p-8 text-center text-primary-foreground">
              <div className="text-2xl mb-2">💕 14th Feb 💕</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Valentine's Day is Tomorrow!
              </h3>
              <p className="text-sm opacity-90">
                The culmination of a week filled with love, leading to the most romantic day of the year! 💝
              </p>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Link to="/hug-day">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Hug Day
              </Button>
            </Link>
            <Link to="/valentines-day">
              <Button className="gap-2 bg-valentine-red hover:bg-valentine-red/90">
                Valentine's Day
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KissDay;
