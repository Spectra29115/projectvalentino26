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

const IS_LOCKED = false;
const CUSTOM_IMAGE = "";
const CUSTOM_MESSAGE = "Life is like a box of chocolates, and meeting you was finding the softest and the warmest brownie. UK? Like the book store one";
const BOTTOM_MESSAGE = "You're sweeter than any chocolate, and tasting u felt like heaven. Here's to our love that only gets sweeter with time. 🍫❤️";

// ═══════════════════════════════════════════════════════════════════════════

const chocolates = ["🍫", "🍬", "🍩", "🎂", "🍪", "🧁"];

const funFacts = [
  "Chocolate releases endorphins, the 'feel-good' hormone",
  "The Aztecs used cocoa beans as currency",
  "Dark chocolate is rich in antioxidants",
  "Switzerland consumes the most chocolate per capita",
];

const ChocolateDay = () => {
  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-valentine-cream to-background">
        <BlurOverlay dayName="Chocolate Day" unlockDate="February 9th" isLocked={IS_LOCKED} />

        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="text-center mb-8 md:mb-12">
            <span className="text-5xl md:text-6xl block mb-4 animate-float">🍫</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-script text-valentine-brown mb-2">
              Chocolate Day
            </h1>
            <p className="text-muted-foreground text-sm md:text-base italic">
              February 9th - Sweet moments, sweeter memories
            </p>
          </div>

          {/* Chocolate Box */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg bg-valentine-brown text-primary-foreground">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
                A Box of Sweet Love 🍬
              </h2>
              <div className="flex justify-center gap-4 flex-wrap">
                {chocolates.map((choco, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 md:w-16 md:h-16 bg-valentine-cream/20 rounded-lg flex items-center justify-center text-2xl md:text-3xl hover:scale-110 transition-transform"
                  >
                    {choco}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Facts and Message */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Fun Facts */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-valentine-brown mb-4 flex items-center gap-2">
                    Did You Know? <span>🤔</span>
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {funFacts.map((fact, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-valentine-brown">•</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sweet Words  */}
                <div className="bg-valentine-pink-light rounded-xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 text-center">
                    Sweet Words Like U 💕
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
              placeholder="HAPPY CHOCOLATE DAY BABY"
            />
          </div>

          {/* Bottom Message */}
          <div className="max-w-3xl mx-auto mb-8">
            <MessageBlock message={BOTTOM_MESSAGE} variant="cream" />
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Link to="/rose-day">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Rose Day
              </Button>
            </Link>
            <Link to="/teddy-day">
              <Button className="gap-2 bg-valentine-orange hover:bg-valentine-orange/90">
                Teddy Day
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChocolateDay;
