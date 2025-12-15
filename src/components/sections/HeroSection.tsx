import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Cpu, Globe } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Quantitative trading visualization with data streams and financial charts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Algorithmic Trading Excellence
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            PhotonFluxCapital is a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Leading Quant
            </span>{" "}
            & Proprietary Trading Firm
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground/70 mb-8 max-w-2xl">
            We combine cutting-edge technology, quantitative research, and deep market 
            expertise to generate consistent returns across global financial markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" asChild>
              <Link to="/careers" className="gap-2">
                Join Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link to="/what-we-do">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 pt-8 border-t border-secondary-foreground/10">
            <div className="flex items-center gap-3">
              <Cpu className="w-8 h-8 text-primary hidden sm:block" />
              <div>
                <p className="text-2xl md:text-3xl font-bold text-secondary-foreground">100+</p>
                <p className="text-sm text-secondary-foreground/60">Trading Strategies</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-accent hidden sm:block" />
              <div>
                <p className="text-2xl md:text-3xl font-bold text-secondary-foreground">24/7</p>
                <p className="text-sm text-secondary-foreground/60">Global Markets</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary hidden sm:block" />
              <div>
                <p className="text-2xl md:text-3xl font-bold text-secondary-foreground">15+</p>
                <p className="text-sm text-secondary-foreground/60">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
