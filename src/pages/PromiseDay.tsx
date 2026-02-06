import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
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
const CUSTOM_MESSAGE = "I promise to be your rock when the seas get rough, your sunshine on cloudy days, and your partner in every adventure life brings. With you, I've found my forever, and I promise to cherish every moment we share.";
const BOTTOM_MESSAGE = "These aren't just promises—they're commitments written in my heart, sealed with love, and meant for eternity. 💜";

// ═══════════════════════════════════════════════════════════════════════════

const promises = [
  { emoji: "💕", text: "To love you unconditionally" },
  { emoji: "🤝", text: "To always be your best friend" },
  { emoji: "🌟", text: "To support your dreams" },
  { emoji: "🛡️", text: "To protect your heart" },
  { emoji: "😊", text: "To make you smile every day" },
  { emoji: "🏠", text: "To build a beautiful life together" },
];

const PromiseDay = () => {
  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-valentine-purple-light to-background">
        <BlurOverlay dayName="Promise Day" unlockDate="February 11th" isLocked={IS_LOCKED} />

        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="text-center mb-8 md:mb-12">
            <span className="text-5xl md:text-6xl block mb-4 animate-float">🤞</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-script text-valentine-purple mb-2">
              Promise Day
            </h1>
            <p className="text-muted-foreground text-sm md:text-base italic">
              February 11th - Words that bind hearts forever
            </p>
          </div>

          {/* Promises List */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-valentine-purple text-center mb-6">
                My Promises to You 💜
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {promises.map((promise, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-valentine-purple-light/50 rounded-lg"
                  >
                    <Check className="w-5 h-5 text-valentine-purple flex-shrink-0" />
                    <span className="text-xl">{promise.emoji}</span>
                    <span className="text-sm">{promise.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sacred Vow */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg bg-valentine-purple-light">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="text-3xl mb-2">🤞 ❤️ 🤞</div>
              <h3 className="text-lg md:text-xl font-semibold text-valentine-purple mb-3">
                A Sacred Vow
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
              placeholder="Add a meaningful promise day photo here"
            />
          </div>

          {/* Bottom Message */}
          <div className="max-w-3xl mx-auto mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-2">💍 ✨ 💜</div>
                <MessageBlock message={BOTTOM_MESSAGE} variant="default" />
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Link to="/teddy-day">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Teddy Day
              </Button>
            </Link>
            <Link to="/hug-day">
              <Button className="gap-2 bg-valentine-teal hover:bg-valentine-teal/90">
                Hug Day
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PromiseDay;
