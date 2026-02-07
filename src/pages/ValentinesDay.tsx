import { Link } from "react-router-dom";
import { ArrowLeft, Heart, RotateCcw } from "lucide-react";
import Layout from "@/components/Layout";
import BlurOverlay from "@/components/BlurOverlay";
import ImageBlock from "@/components/ImageBlock";
import MessageBlock from "@/components/MessageBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ═══════════════════════════════════════════════════════════════════════════
// CUSTOMIZATION SECTION
// ═══════════════════════════════════════════════════════════════════════════

const unlockDate = new Date("2026-02-14"); // Change this date for each day
const IS_LOCKED = new Date() < unlockDate;

const CUSTOM_IMAGE = "";
const CUSTOM_MESSAGE = "Through every rose, every chocolate, every hug and kiss, I've been falling deeper in love with you. Today, I celebrate the greatest gift life has given me — You.";
const BOTTOM_MESSAGE = "You are my morning sun and evening star. My laughter, my peace, my beautiful chaos. Today and always, you are my Valentine. I love you more than words could ever express.";
const CLOSING_MESSAGE = "Thank you for walking through this Valentine's Week with me. Every day with you is a celebration of love! 💕";

// ═══════════════════════════════════════════════════════════════════════════

const journeyDays = [
  { emoji: "🌹", name: "Rose Day", desc: "Where it all began" },
  { emoji: "🍫", name: "Chocolate Day", desc: "Sweetening our bond" },
  { emoji: "🧸", name: "Teddy Day", desc: "Comfort in love" },
  { emoji: "🤞", name: "Promise Day", desc: "Vows from the heart" },
  { emoji: "🤗", name: "Hug Day", desc: "Warmth of togetherness" },
  { emoji: "💋", name: "Kiss Day", desc: "Sealing our love" },
  { emoji: "❤️", name: "Valentine's Day", desc: "Celebrating us!" },
];

const ValentinesDay = () => {
  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-valentine-pink-light to-background">
        <BlurOverlay dayName="Valentine's Day" unlockDate="February 14th" isLocked={IS_LOCKED} />

        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="text-center mb-8 md:mb-12">
            <span className="text-5xl md:text-6xl block mb-4 animate-float">💕</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-script text-primary mb-2">
              Valentine's Day
            </h1>
            <p className="text-muted-foreground text-sm md:text-base italic">
              February 14th - The Grand Celebration of Love
            </p>
          </div>

          {/* Happy Valentine's Day Banner */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-xl valentine-gradient">
            <CardContent className="p-6 md:p-8 text-center text-primary-foreground">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Happy Valentine's Day! 💕
              </h2>
              <div className="text-3xl mb-3">💐 💍 🎁 🍾 💖</div>
              <p className="text-sm opacity-90">
                The day we celebrate love in all its beautiful forms
              </p>
            </CardContent>
          </Card>

          {/* Journey & Forever Yours */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Our Journey */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                    Our Journey of Love <span>💑</span>
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {journeyDays.map((day, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span>{day.emoji}</span>
                        <span className="font-medium">{day.name}</span>
                        <span className="text-muted-foreground">- {day.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Forever Yours */}
                <div className="bg-valentine-pink-light rounded-xl p-4 md:p-6 flex flex-col justify-center">
                  <Heart className="w-10 h-10 mx-auto mb-3 text-primary animate-pulse-heart" />
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 text-center">
                    Forever Yours 💕
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
              placeholder="Add your most special Valentine's photo here"
            />
          </div>

          {/* My Valentine, My Forever */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="text-3xl mb-3">👫 💕</div>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                My Valentine, My Forever
              </h3>
              <p className="text-muted-foreground text-sm italic max-w-lg mx-auto">
                "{BOTTOM_MESSAGE}"
              </p>
            </CardContent>
          </Card>

          {/* Closing */}
          <Card className="max-w-3xl mx-auto mb-8 valentine-gradient shadow-xl">
            <CardContent className="p-6 md:p-8 text-center text-primary-foreground">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Here's to Our Love!
              </h3>
              <p className="text-sm opacity-90 mb-4">
                {CLOSING_MESSAGE}
              </p>
              <div className="text-3xl">💕 ❤️ 💑 ❤️ 💕</div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Link to="/kiss-day">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Kiss Day
              </Button>
            </Link>
            <Link to="/">
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                <RotateCcw className="w-4 h-4" />
                Start Over with Love
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ValentinesDay;
