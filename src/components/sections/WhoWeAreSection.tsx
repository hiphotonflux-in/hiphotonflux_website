import { Users, Target, Brain, Handshake } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Startup Energy, Long-term Stability",
    description:
      "We combine the agility and innovation of a startup with the stability and resources of an established firm. Our culture thrives on adaptability and forward-thinking approaches.",
  },
  {
    icon: Brain,
    title: "Problem-Solving Mindset",
    description:
      "Every challenge is an opportunity. We approach complex market problems with analytical rigor and creative solutions, constantly pushing the boundaries of what's possible.",
  },
  {
    icon: Users,
    title: "Continuous Learning",
    description:
      "Markets evolve, and so do we. Our commitment to continuous learning ensures we stay ahead of trends, technologies, and trading methodologies.",
  },
  {
    icon: Handshake,
    title: "Collaborative Teamwork",
    description:
      "Success is a team sport. We foster an environment where ideas flow freely, expertise is shared, and collective intelligence drives our performance.",
  },
];

const WhoWeAreSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground">
            A team of exceptional individuals united by a passion for markets, 
            technology, and the pursuit of excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
