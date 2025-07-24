import { Star } from "lucide-react";
import { Card, CardContent } from "@mui/material";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Designer",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "“The book atomic habits completely reshaped how I viewed progress. Instead of setting huge goals, I started focusing on tiny daily habits — and the impact on my mental well-being has been profound. It’s more about identity than outcome, and that shift helped reduce my anxiety around productivity.”",
    initials: "SC",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Software Engineer",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "“It’s brutally honest and refreshingly liberating. Mark’s perspective helped me let go of toxic positivity and embrace discomfort as part of growth.",
    initials: "MJ",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Marketing Manager",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "“Gentle and inspiring, this book helped me find purpose in everyday life. It’s less about hustle and more about balance.",
    initials: "ER",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Creative Director",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "“While it’s fiction, the emotional depth in this book made me reflect deeply on grief, love, and how we cope with pain. It’s poetic, heartbreaking, and oddly healing. A must-read for those navigating emotional complexity.",
    initials: "DK",
  },
  {
    id: 5,
    name: "Jessica Wu",
    role: "UX Researcher",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "“This book made therapy feel human. Lori’s storytelling is honest, funny, and incredibly moving. It reminds you that everyone — even therapists — has struggles, and that seeking help is a strength, not a weakness.”",
    initials: "JW",
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Entrepreneur",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "“A powerful, research-backed challenge to the conventional narrative on depression. It explores how loneliness, lack of purpose, and disconnection from meaningful work contribute to mental health issues. Eye-opening and hopeful.”",
    initials: "AT",
  },
];

const Review = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
        </div>

        <br />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              elevation={4}
              className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                {/* Review Content */}
                <blockquote className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    {testimonial.avatar === "/placeholder.svg" && (
                      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {testimonial.initials}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <br />
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-6 flex-wrap text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              <span className="font-semibold">4.9/5 Average Rating</span>
            </div>

            <span>•</span>
            <div className="font-semibold">50,000+ Happy Customers</div>
            <span>•</span>
            <div className="font-semibold">99% Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
