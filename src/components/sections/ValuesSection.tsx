import { Star, Sparkles, Users, Heart } from "lucide-react";

const values = [
  {
    icon: Star,
    title: "High Expectations",
    description:
      "We set ambitious goals and hold ourselves to the highest standards. Mediocrity has no place here—we strive for excellence in everything we do.",
  },
  {
    icon: Sparkles,
    title: "Curiosity",
    description:
      "Questions drive innovation. We cultivate an environment where intellectual curiosity is celebrated and exploration is encouraged.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great ideas emerge from diverse perspectives. We believe in the power of teamwork and open dialogue to solve complex challenges.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We're driven by a genuine love for what we do. This passion fuels our dedication, creativity, and unwavering commitment to success.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our values define who we are and guide every decision we make. They 
              shape our culture and drive our success in the competitive world of 
              quantitative trading.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/50"
                >
                  <value.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{value.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
