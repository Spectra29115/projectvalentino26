import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
const CUSTOM_MESSAGE = "When I'm not there to hold you, let this teddy remind you of my warmth. Every time you hug it, imagine it's me wrapping my arms around you with all my love.";
const BOTTOM_MESSAGE = "Just like a teddy, I'll always be soft with your heart, warm in my love, and forever by your side. 🧸❤️";

// ═══════════════════════════════════════════════════════════════════════════

const teddies = ["🧸", "🐻", "🐰", "🐼", "🐨"];

const whyWeLoveTeddies = [
  { emoji: "🤗", text: "They're always ready for a cuddle" },
  { emoji: "🛏️", text: "Perfect sleeping companions" },
  { emoji: "🤫", text: "They hold our secrets safe" },
  { emoji: "💝", text: "Reminders of love and care" },
];

const TeddyDay = () => {
  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-valentine-cream to-background">
        <BlurOverlay dayName="Teddy Day" unlockDate="February 10th" isLocked={IS_LOCKED} />

        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="text-center mb-8 md:mb-12">
            <span className="text-5xl md:text-6xl block mb-4 animate-float">🧸</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-script text-valentine-orange mb-2">
              Teddy Day
            </h1>
            <p className="text-muted-foreground text-sm md:text-base italic">
              February 10th - Cuddly companions, endless comfort
            </p>
          </div>

          {/* Teddy Collection */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg bg-valentine-yellow/50">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-valentine-orange text-center mb-4">
                My Cuddly Collection 🧸
              </h2>
              <div className="flex justify-center gap-4 flex-wrap">
                {teddies.map((teddy, i) => (
                  <div 
                    key={i} 
                    className="w-16 h-16 md:w-20 md:h-20 bg-card rounded-xl flex items-center justify-center text-3xl md:text-4xl shadow-md hover:scale-110 transition-transform"
                  >
                    {teddy}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Why We Love Teddies & Cuddly Promise */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Why We Love */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-valentine-orange mb-4 flex items-center gap-2">
                    Why We Love Teddies <span>💕</span>
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {whyWeLoveTeddies.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-xl">{item.emoji}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cuddly Promise */}
                <div className="bg-valentine-pink-light rounded-xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-valentine-orange mb-3 text-center">
                    A Cuddly Promise 💛
                  </h3>
                  <p className="text-muted-foreground text-sm italic text-center">
                    "{CUSTOM_MESSAGE}"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image Block */}
          <div className="max-w-3xl mx-auto mb-6">
            <ImageBlock 
              imageSrc={CUSTOM_IMAGE} 
              placeholder="Add a cuddly teddy day photo here"
            />
          </div>

          {/* Decoration */}
          <div className="max-w-3xl mx-auto mb-4">
            <Card className="bg-valentine-cream">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">🧸 ❤️ 🧸</div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Message */}
          <div className="max-w-3xl mx-auto mb-8">
            <MessageBlock message={BOTTOM_MESSAGE} variant="cream" />
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Link to="/chocolate-day">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Chocolate Day
              </Button>
            </Link>
            <Link to="/promise-day">
              <Button className="gap-2 bg-valentine-purple hover:bg-valentine-purple/90">
                Promise Day
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeddyDay;
