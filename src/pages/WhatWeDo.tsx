import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, BarChart2, Globe, Shield, Clock } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import aboutHero from "@/assets/online-school-equipment-home.png";

const WhatWeDo = () => {
  return (
    <>
      <Helmet>
        <title>What We Do | PhotonFluxCapital</title>
        <meta
          name="description"
          content="Discover how PhotonFluxCapital leverages automation, quantitative expertise, and global market access to generate consistent returns."
        />
      </Helmet>
      <PageLayout>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <img
              src={aboutHero}
              alt="Quantitative trading visualization with data streams and financial charts"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/85" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                What We <span className="text-primary">Do</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                We combine cutting-edge technology with deep market expertise to 
                identify and capture opportunities across global financial markets.
              </p>
            </div>
          </div>
        </section>

        {/* Competitive Edge */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Competitive Edge
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    In the fast-paced world of quantitative trading, speed and precision 
                    are paramount. Our competitive advantage stems from the perfect fusion 
                    of advanced automation and deep market understanding.
                  </p>
                  <p>
                    We don't just react to markets—we anticipate them. Our proprietary 
                    systems analyze vast amounts of data in real-time, identifying patterns 
                    and opportunities that human traders might miss.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">Speed</h3>
                  <p className="text-sm text-muted-foreground">
                    Microsecond execution across global venues
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">Precision</h3>
                  <p className="text-sm text-muted-foreground">
                    Data-driven decisions with statistical rigor
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">Risk Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Sophisticated risk management at every level
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                  <Clock className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">24/7 Operations</h3>
                  <p className="text-sm text-muted-foreground">
                    Round-the-clock monitoring and trading
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Track Record */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Proven Track Record
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Our systematic approach has delivered consistent results through various 
                market conditions, from bull markets to periods of extreme volatility.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">15+</p>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <p className="text-4xl font-bold text-accent mb-2">100+</p>
                  <p className="text-muted-foreground">Active Strategies</p>
                </div>
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">$B+</p>
                  <p className="text-muted-foreground">Assets Managed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Asset Classes */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Diverse Asset Classes & Models
              </h2>
              <p className="text-lg text-gray-700">
                Our strategies span multiple asset classes and employ a diverse range 
                of models, providing resilience and opportunity across market conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Equities", desc: "Long/short strategies across global stock markets" },
                { title: "Fixed Income", desc: "Yield curve and spread trading strategies" },
                { title: "Derivatives", desc: "Options, futures, and structured products" },
                { title: "Foreign Exchange", desc: "Currency pair trading and carry strategies" },
                { title: "Commodities", desc: "Energy, metals, and agricultural markets" },
                { title: "Digital Assets", desc: "Cryptocurrency trading and DeFi strategies" },
              ].map((asset, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary/30 transition-colors"
                >
                  <BarChart2 className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">{asset.title}</h3>
                  <p className="text-sm text-gray-600">{asset.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trading Approach */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Trading Approach
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We employ a multi-strategy approach, deploying capital across hundreds 
                    of uncorrelated models. This diversification reduces risk while capturing 
                    alpha from multiple sources.
                  </p>
                  <p>
                    Our research process is rigorous and continuous. Every strategy undergoes 
                    extensive backtesting, stress testing, and paper trading before live deployment. 
                    We believe in evidence-based trading, letting data drive our decisions.
                  </p>
                  <p>
                    With a global presence and 24/7 operations, we're always active in the 
                    markets that matter, capturing opportunities across time zones and asset classes.
                  </p>
                </div>
                <Button size="lg" className="mt-6" asChild>
                  <Link to="/careers" className="gap-2">
                    Join Our Team
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-48 h-48 lg:w-60 lg:h-60 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Globe className="w-16 h-16 lg:w-20 lg:h-20 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default WhatWeDo;
