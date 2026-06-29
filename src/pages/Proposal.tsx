import { Heart, Send } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ═══════════════════════════════════════════════════════════════════════════
// CUSTOMIZATION SECTION - Edit your letter and messages below
// ═══════════════════════════════════════════════════════════════════════════

const PROPOSAL_LETTER = `CUSTOM MESSAGE`;

const SUBTITLE = "A journey through love, from proposal to forever 💕";

// ═══════════════════════════════════════════════════════════════════════════

const Proposal = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-valentine-pink-light to-background">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-12">
            <Heart className="w-16 h-16 md:w-20 md:h-20 mx-auto text-primary mb-4 animate-pulse-heart" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-script text-primary mb-4">
              Will You Be Mine?
            </h1>
            <p className="text-muted-foreground text-sm md:text-base italic">
              {SUBTITLE}
            </p>
          </div>

          {/* Letter Card */}
          <Card className="max-w-2xl mx-auto mb-8 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2 flex items-center justify-center gap-2">
                Write Your Heart Out <span>💌</span>
              </h2>
              <p className="text-muted-foreground text-sm text-center mb-6">
                Pour your feelings into words...
              </p>

              {/* Hardcoded Letter Display */}
              <div className="bg-valentine-pink-light/50 rounded-lg p-4 md:p-6 min-h-[200px]">
                <p className="text-foreground text-sm md:text-base whitespace-pre-line leading-relaxed">
                  {PROPOSAL_LETTER}
                </p>
              </div>

            </CardContent>
          </Card>

          {/* Start Journey CTA */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Begin your Valentine's Week journey
            </p>
            <Link to="/rose-day">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <span>🌹</span>
                Start with Rose Day →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Proposal;
