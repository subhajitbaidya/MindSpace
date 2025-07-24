import { Card, CardContent } from "@mui/material";
import {
  Shield,
  Headphones,
  Book,
  Award,
  RefreshCw,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Dedicated counseller",
    description:
      "Our AI powered counseller bot is always there to help you, we plan to integrate humans in the loop for further help",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Data Protection",
    description:
      "We aim to provide our users a free space to vent out their emotions, your data will be anonymous and safe",
    color: "text-primary",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Get help whenever you need it with our round-the-clock customer support team.",
    color: "text-success",
  },
  {
    icon: Book,
    title: "Marketplace",
    description:
      "Browse through our wide range of products and purchase and get it delivered at your doorstep",
    color: "text-accent",
  },
  {
    icon: Award,
    title: "Quality Assurance Tested",
    description:
      "Each product is carefully tested and comes with our quality guarantee.",
    color: "text-primary",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description:
      "30-day hassle-free returns. Not satisfied? Send it back for a full refund.",
    color: "text-success",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose MindMap?
          </h2>
        </div>

        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-background"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
