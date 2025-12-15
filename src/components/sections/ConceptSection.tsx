import { Lightbulb, Compass, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ConceptSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground">
            From idea to execution, our systematic approach ensures every trading 
            opportunity is thoroughly evaluated and precisely implemented.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Think */}
          <div className="relative p-8 lg:p-10 rounded-2xl bg-card border border-border overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Think</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our journey begins with deep research and creative brainstorming. We 
                analyze market data, identify patterns, and explore innovative trading 
                opportunities that others might overlook. Every great strategy starts 
                with a powerful idea.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Market research & analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Pattern recognition
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Hypothesis generation
                </li>
              </ul>
            </div>
          </div>

          {/* Strategize */}
          <div className="relative p-8 lg:p-10 rounded-2xl bg-card border border-border overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Strategize</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ideas transform into actionable strategies through rigorous quantitative 
                modeling. We backtest, optimize, and stress-test our approaches before 
                deployment, ensuring robust performance across market conditions.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Quantitative modeling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Backtesting & validation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Execution planning
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/careers" className="gap-2">
              Join Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
