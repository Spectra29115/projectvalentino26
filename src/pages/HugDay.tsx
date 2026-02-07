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

const unlockDate = new Date("2026-02-12"); // Change this date for each day
const IS_LOCKED = new Date() < unlockDate;

const CUSTOM_IMAGE = "";
const CUSTOM_MESSAGE = "In your arms, I've found my safe haven—a place where worries melt away and only love remains. Every hug from you feels like coming home. You are my favorite place to be.";
const BOTTOM_MESSAGE = "Did you know? Hugging releases oxytocin, the 'love hormone,' which reduces stress and increases feelings of trust and bonding! 🤗💚";

// ═══════════════════════════════════════════════════════════════════════════

const hugTypes = [
  { emoji: "🤗", name: "Warm Embrace", desc: "Full of comfort and care" },
  { emoji: "💕", name: "Romantic Hug", desc: "Filled with deep love" },
  { emoji: "🐻", name: "Bear Hug", desc: "Tight and reassuring" },
  { emoji: "👫", name: "Side Hug", desc: "Friendly and sweet" },
];

const HugDay = () => {
  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-valentine-teal-light to-background">
        <BlurOverlay dayName="Hug Day" unlockDate="February 12th" isLocked={IS_LOCKED} />

        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="text-center mb-8 md:mb-12">
            <span className="text-5xl md:text-6xl block mb-4 animate-float">🤗</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-script text-valentine-teal mb-2">
              Hug Day
            </h1>
            <p className="text-muted-foreground text-sm md:text-base italic">
              February 12th - Where words fail, hugs speak
            </p>
          </div>

          {/* Virtual Hug */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg">
            <CardContent className="p-6 md:p-8 text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-valentine-teal mb-4">
                A Virtual Hug for You 🤗
              </h2>
              <div className="text-4xl mb-4">🫂 💚 🫂</div>
              <p className="text-muted-foreground text-sm italic">
                *Sending you the tightest, warmest hug across any distance*
              </p>
            </CardContent>
          </Card>

          {/* Types of Hugs */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {hugTypes.map((hug, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-valentine-teal-light/50 rounded-lg"
                  >
                    <span className="text-2xl">{hug.emoji}</span>
                    <div>
                      <p className="font-medium text-valentine-teal">{hug.name}</p>
                      <p className="text-xs text-muted-foreground">{hug.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* In Your Arms */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg bg-valentine-teal-light">
            <CardContent className="p-6 md:p-8 text-center">
              <Heart className="w-8 h-8 mx-auto mb-2 text-valentine-teal" />
              <h3 className="text-lg md:text-xl font-semibold text-valentine-teal mb-3">
                In Your Arms 💕
              </h3>
              <p className="text-muted-foreground text-sm italic max-w-xl mx-auto">
                "{CUSTOM_MESSAGE}"
              </p>
            </CardContent>
          </Card>

          {/* Image Block */}
          <div className="max-w-3xl mx-auto mb-6">
            <ImageBlock
              imageSrc={CUSTOM_IMAGE}
              placeholder="Add a warm hug day photo here"
            />
          </div>

          {/* Bottom Message */}
          <div className="max-w-3xl mx-auto mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-2">💐 ✨</div>
                <MessageBlock message={BOTTOM_MESSAGE} variant="default" />
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Link to="/promise-day">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Promise Day
              </Button>
            </Link>
            <Link to="/kiss-day">
              <Button className="gap-2 bg-valentine-pink hover:bg-valentine-pink/90">
                Kiss Day
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HugDay;
