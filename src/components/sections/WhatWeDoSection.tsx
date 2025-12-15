import { Bot, LineChart, BarChart3, Globe } from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    title: "Automated Trading",
    description:
      "Our sophisticated algorithms execute trades with precision and speed, capitalizing on market opportunities across multiple timeframes and asset classes.",
  },
  {
    icon: LineChart,
    title: "Quantitative Expertise",
    description:
      "We leverage advanced mathematical models, statistical analysis, and machine learning to identify patterns and generate alpha in complex markets.",
  },
  {
    icon: BarChart3,
    title: "Diverse Asset Classes",
    description:
      "From equities and fixed income to derivatives and digital assets, we deploy strategies across a wide spectrum of financial instruments.",
  },
  {
    icon: Globe,
    title: "Global Markets",
    description:
      "Our trading infrastructure spans major exchanges worldwide, enabling 24/7 market coverage and diversified geographical exposure.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            We harness the power of technology and quantitative analysis to 
            navigate global financial markets with precision and efficiency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5">
                <capability.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-foreground mb-3">
                {capability.title}
              </h3>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
