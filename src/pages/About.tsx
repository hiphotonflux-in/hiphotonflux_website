import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Rocket, Users, Shield, Cpu } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import aboutHero from "@/assets/online-school-equipment-home.png";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | PhotonFlux Capital</title>
        <meta
          name="description"
          content="Learn about PhotonFlux Capital's mission, philosophy, and the exceptional team driving innovation in quantitative trading."
        />
      </Helmet>
      <PageLayout>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-white">  
          <div className="absolute inset-0 z-0">
            <img
              src={aboutHero}
              alt="Quantitative research visualization with neural networks and data analysis"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/85" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-primary">PhotonFlux Capital</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                We are a team of mathematicians, engineers, and traders united by a 
                passion for leveraging technology to decode financial markets.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission & Philosophy
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At PhotonFlux Capital, we believe that the intersection of innovation, 
                    expertise, and collaboration creates extraordinary opportunities. Our 
                    mission is to push the boundaries of quantitative trading while 
                    maintaining the highest standards of integrity and excellence.
                  </p>
                  <p>
                    We're not just building trading strategies—we're building the future 
                    of finance. Our philosophy centers on continuous improvement, data-driven 
                    decision making, and the relentless pursuit of alpha across global markets.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Pioneering new approaches to market analysis</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Rocket className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">Striving for the highest standards</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Diverse perspectives drive success</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Shield className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">Integrity</h3>
                  <p className="text-sm text-muted-foreground">Ethical conduct in all we do</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Empowerment Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowerment & Growth
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We believe in empowering every team member with ownership, autonomy, and 
                the resources they need to excel. Your growth is our growth.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="p-6 rounded-xl bg-white border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2">Ownership</h3>
                  <p className="text-sm text-gray-600">
                    Take charge of meaningful projects and see your ideas come to life.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2">Support</h3>
                  <p className="text-sm text-gray-600">
                    Access to mentorship, resources, and a collaborative environment.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2">Development</h3>
                  <p className="text-sm text-gray-600">
                    Continuous learning opportunities and career advancement paths.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <Cpu className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    World-Class Infrastructure
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Low-latency trading systems with global connectivity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Petabytes of historical and real-time market data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>High-performance computing clusters for research</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Proprietary tools and frameworks for strategy development</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Technology & People
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our cutting-edge infrastructure provides the foundation for innovation. 
                    But technology alone isn't enough—it's our people who make the difference.
                  </p>
                  <p>
                    We seek individuals who thrive in challenging environments, embrace 
                    complexity, and are driven by intellectual curiosity. If you're passionate 
                    about solving hard problems and building something meaningful, you'll 
                    find your home here.
                  </p>
                </div>
                <Button size="lg" className="mt-6" asChild>
                  <Link to="/careers" className="gap-2">
                    Explore Careers
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default About;
