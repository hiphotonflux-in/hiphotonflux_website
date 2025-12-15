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
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-700">
            We harness the power of technology and quantitative analysis to 
            navigate global financial markets with precision and efficiency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5">
                <capability.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
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
