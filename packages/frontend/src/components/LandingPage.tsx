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
import { Hero } from "@/components/ui/animated-hero";
import { Carousel } from "./ui/carousel";
import { GET_FEATURED } from "@/gql/gql.client";
import { useQuery } from "@apollo/client/react";

interface Book {
  image: string;
  category: string;
}

interface BooksResponse {
  books: Book[];
}

const LandingPage = () => {
  const { data, loading, error } = useQuery<BooksResponse>(GET_FEATURED);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books</p>;
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
      <Hero />

      {/* Daily Affirmation */}
      <section className="bg-linear-to-r from-[#e3ffe7] to-[#d9e7ff] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-gray-600 mx-auto mb-4" />
          <p className="text-2xl text-gray-600">{quotes[0]}</p>
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
                  <Icon className="h-8 w-8 text-black-600" />
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
            {data?.books?.map((image, index) => (
              <Carousel
                key={index}
                className="group relative overflow-hidden rounded-2xl h-64 bg-linear-to-br from-purple-100 to-teal-100 hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-white/30"></div>
                <div className="absolute flex items-center flex-col bottom-6 left-6 right-6">
                  <img src={image.image} alt="Atomic" />
                  <h3 className="text-xl text-black mb-2">{image.category}</h3>
                  <p className="text-black/80 text-sm">Explore collection</p>
                </div>
              </Carousel>
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
      <section className="bg-linear-to-r from-[#e3ffe7] to-[#d9e7ff] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-gray-600 mb-6">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Take the first step towards better mental health with resources that
            understand you.
          </p>
          <Button className="bg-white text-black-700 hover:bg-gray-100 px-8 py-6 rounded-lg">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
