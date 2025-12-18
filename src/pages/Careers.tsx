import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Rocket, Code, Brain, Briefcase, Settings } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import aboutHero from "@/assets/online-school-equipment-home.png";

const openPositions = [
  {
    title: "Business Development Lead",
    type: "Full-time",
    location: "Pune",
    description:
      "Drive strategic partnerships and business growth initiatives, working closely with leadership to expand our market presence.",
  },
  {
    title: "Operations Engineer",
    type: "Full-time",
    location: "Pune",
    description:
      "Build and maintain critical trading infrastructure, ensuring high availability and optimal performance of our systems.",
  },
  {
    title: "Quantitative Researcher",
    type: "Full-time",
    location: "Pune",
    description:
      "Develop and refine trading strategies using advanced statistical methods and machine learning techniques.",
  },
  {
    title: "Software Engineer",
    type: "Full-time",
    location: "Pune",
    description:
      "Design and implement high-performance trading systems with focus on low latency and reliability.",
  },
];

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | PhotonFluxCapital</title>
        <meta
          name="description"
          content="Join PhotonFluxCapital's exceptional team. Explore career opportunities in quantitative research, software engineering, and operations."
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
                Our People Make Us{" "}
                <span className="text-primary">Exceptional</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                We're always looking for talented individuals who are passionate about 
                solving complex problems and pushing the boundaries of what's possible.
              </p>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why PhotonFluxCapital?
              </h2>
              <p className="text-lg text-muted-foreground">
                We've built a culture where exceptional talent thrives, curiosity is 
                celebrated, and every team member can make a real impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <GraduationCap className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">
                  Continuous Learning
                </h3>
                <p className="text-sm text-muted-foreground">
                  Access to world-class resources, mentorship, and opportunities 
                  for professional growth.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <Users className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">
                  High Expectations
                </h3>
                <p className="text-sm text-muted-foreground">
                  Work alongside brilliant minds who challenge you to be your best 
                  every day.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <Brain className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">
                  Intellectual Challenge
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tackle complex problems in math, statistics, and computer science 
                  that matter.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <Rocket className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">
                  Strong Rewards
                </h3>
                <p className="text-sm text-muted-foreground">
                  Competitive compensation, comprehensive benefits, and real 
                  ownership in our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Look For */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  What We Look For
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We seek individuals with an insatiable passion for mathematics, 
                    programming, and problem solving. Our best team members share a 
                    common trait: they're never satisfied with "good enough."
                  </p>
                  <p>
                    Whether you're a recent graduate or an experienced professional, 
                    we value intellectual curiosity, collaborative spirit, and the 
                    drive to make a meaningful impact.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Strong programming skills</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Mathematical aptitude</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Collaborative mindset</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Rocket className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Drive for excellence</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl" />
                <div className="relative p-8 rounded-2xl bg-card border border-border">
                  <blockquote className="text-lg text-card-foreground italic mb-4">
                    "Joining PhotonFlux was the best career decision I've made. The 
                    intellectual environment, the caliber of colleagues, and the 
                    opportunity to work on cutting-edge problems is unmatched."
                  </blockquote>
                  <p className="text-muted-foreground">— Senior Quantitative Researcher</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Open Positions
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our current opportunities and find your next challenge.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {index % 2 === 0 ? (
                          <Briefcase className="w-6 h-6 text-primary" />
                        ) : (
                          <Settings className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-1">
                          {position.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                          <span>{position.type}</span>
                          <span>•</span>
                          <span>{position.location}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {position.description}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" asChild className="md:flex-shrink-0">
                      <Link to="/contact" className="gap-2">
                        Apply
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Don't see a role that fits? We're always interested in hearing from 
              exceptional candidates. Send us your resume and tell us about yourself.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Careers;
