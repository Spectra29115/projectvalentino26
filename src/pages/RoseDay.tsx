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

// Set to false to unlock this page
const unlockDate = new Date("2026-02-07"); // Change this date for each day
const IS_LOCKED = new Date() < unlockDate;

// Custom image - replace with your image URL or import
const CUSTOM_IMAGE = "/Images/image_RoseDay.jpeg"; // Example: "https://example.com/our-photo.jpg"

// Custom message for your loved one
const CUSTOM_MESSAGE = "Like a rose needs sunshine and rain to bloom, my heart needs you to find love. My love for you grows stronger with each passing day, just like a rose in full bloom. Happy Rose Day, my love! 🌹";

const BOTTOM_MESSAGE = "The best pic of u with the very rose i gifted u. 💕From your faithful phoolwala";

// ═══════════════════════════════════════════════════════════════════════════

const roseColors = [
  { emoji: "🌹", color: "Red", meaning: "Deep Love & Passion", textColor: "text-valentine-red" },
  { emoji: "🌷", color: "Pink", meaning: "Gratitude & Admiration", textColor: "text-valentine-pink" },
  { emoji: "🤍", color: "White", meaning: "Purity & New Beginnings", textColor: "text-muted-foreground" },
  { emoji: "💛", color: "Yellow", meaning: "Friendship & Joy", textColor: "text-valentine-orange" },
  { emoji: "🧡", color: "Orange", meaning: "Enthusiasm & Desire", textColor: "text-valentine-orange" },
];

const RoseDay = () => {
  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-valentine-pink-light to-background">
        <BlurOverlay dayName="Rose Day" unlockDate="February 7th" isLocked={IS_LOCKED} />

        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="text-center mb-8 md:mb-12">
            <span className="text-5xl md:text-6xl block mb-4 animate-float">🌹</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-script text-primary mb-2">
              Rose Day
            </h1>
            <p className="text-muted-foreground text-sm md:text-base italic">
              February 7th - The day that blooms with love
            </p>
          </div>

          {/* Content */}
          <Card className="max-w-3xl mx-auto mb-6 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Rose Meanings */}
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                    The Language of Roses
                  </h2>
                  <ul className="space-y-3">
                    {roseColors.map((rose) => (
                      <li key={rose.color} className="flex items-center gap-3">
                        <span className="text-xl">{rose.emoji}</span>
                        <span>
                          <span className={`font-medium ${rose.textColor}`}>{rose.color}</span>
                          {" - "}{rose.meaning}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Custom Section */}
                <div className="bg-valentine-pink-light rounded-xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 text-center">
                    A Rose for You 🌹
                  </h3>
                  <p className="text-muted-foreground text-sm italic text-center mb-4">
                    "{CUSTOM_MESSAGE}"
                  </p>
                  <div className="flex justify-center gap-2 text-2xl">
                    🌹 🥀 🌷 🌸 🌺
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image Block */}
          <div className="max-w-3xl mx-auto mb-6">
            <ImageBlock
              imageSrc={CUSTOM_IMAGE}
              placeholder=""
            />
          </div>

          {/* Bottom Message */}
          <div className="max-w-3xl mx-auto mb-8">
            <MessageBlock message={BOTTOM_MESSAGE} variant="pink" />
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Proposal
              </Button>
            </Link>
            <Link to="/chocolate-day">
              <Button className="gap-2 bg-valentine-brown hover:bg-valentine-brown/90">
                Chocolate Day
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoseDay;
