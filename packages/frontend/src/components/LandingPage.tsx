import {
  ArrowRight,
  BookHeart,
  Brain,
  Sparkles,
  Star,
  Quote,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Thumbnail from "./../assets/images/thumbnail.png";

const LandingPage = () => {
  const quotes = [
    "Your mental health is a priority, not an afterthought.",
    "Healing is not linear, and that's okay.",
    "You are worthy of peace and happiness.",
  ];

  const features = [
    {
      icon: BookHeart,
      title: "Curated Collections",
      description:
        "Books carefully selected by mental health professionals to support your journey.",
    },
    {
      icon: Brain,
      title: "Expert Guidance",
      description:
        "Each book includes professional insights and reading recommendations.",
    },
    {
      icon: Sparkles,
      title: "Personal Growth",
      description:
        "Track your progress with our interactive journaling features.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "MindSpace helped me find the resources I needed during my darkest moments. The book recommendations were life-changing.",
      rating: 5,
    },
    {
      name: "James K.",
      text: "The journaling feature combined with the books has been instrumental in my recovery journey.",
      rating: 5,
    },
    {
      name: "Emily R.",
      text: "A safe space with resources that actually understand what I'm going through. Highly recommend.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
                Your Journey to Wellness Starts Here
              </div>

              <h1 className="text-5xl text-gray-900">
                Find Peace Through
                <span className="block text-purple-600 mt-2">
                  Reading & Reflection
                </span>
              </h1>

              <p className="text-xl text-gray-600">
                Discover carefully curated books and tools to support your
                mental health journey. You're not alone, and healing is
                possible.
              </p>

              <div className="flex gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-lg">
                  Explore Books
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-6 rounded-lg"
                >
                  Start Journaling
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20"></div>
              <img src={Thumbnail} alt="Atomic" />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Affirmation */}
      <section className="bg-linear-to-r from-purple-600 to-teal-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-white/60 mx-auto mb-4" />
          <p className="text-2xl text-white">{quotes[0]}</p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Why Choose MindSpace?</h2>
          <p className="text-xl text-gray-600">
            Resources designed with your wellbeing in mind
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow border-purple-100"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-white/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">
              Featured Collections
            </h2>
            <p className="text-xl text-gray-600">
              Browse our most popular categories
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Anxiety Relief",
              "Mindfulness",
              "Depression Support",
              "Self-Love",
            ].map((category, index) => (
              <button
                key={index}
                className="group relative overflow-hidden rounded-2xl h-64 bg-linear-to-br from-purple-100 to-teal-100 hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl text-white mb-2">{category}</h3>
                  <p className="text-white/80 text-sm">Explore collection</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Stories of Hope</h2>
          <p className="text-xl text-gray-600">
            Real experiences from our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-purple-100">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <p className="text-purple-700">— {testimonial.name}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-purple-600 to-teal-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-6">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Take the first step towards better mental health with resources that
            understand you.
          </p>
          <Button className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-6 rounded-lg">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
