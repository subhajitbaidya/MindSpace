import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Designer",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "The headphones are absolutely incredible! The sound quality is pristine and the noise cancellation works perfectly. Best purchase I've made this year.",
    initials: "SC",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Software Engineer",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "Amazing customer service and lightning-fast shipping. The smartwatch exceeded my expectations and the build quality is top-notch.",
    initials: "MJ",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Marketing Manager",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "TechVibe has become my go-to for premium tech products. Every item I've ordered has been perfectly packaged and exactly as described.",
    initials: "ER",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Creative Director",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "The backpack is both stylish and functional. Perfect for my daily commute and weekend adventures. The attention to detail is remarkable.",
    initials: "DK",
  },
  {
    id: 5,
    name: "Jessica Wu",
    role: "UX Researcher",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "Exceptional build quality and sleek design. The wireless speaker delivers amazing sound and looks great in any room. Highly recommended!",
    initials: "JW",
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Entrepreneur",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "From ordering to delivery, everything was seamless. The products are exactly what I expected and the packaging was premium. Will definitely shop again!",
    initials: "AT",
  },
];

const Review = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust TechVibe for their
            tech needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group rounded-xl hover:shadow-product transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold bg-gradient-to-br from-primary to-secondary text-white">
                      {testimonial.initials}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="font-semibold">4.9/5 Average Rating</span>
            </div>
            <div className="text-muted-foreground">•</div>
            <div className="font-semibold">50,000+ Happy Customers</div>
            <div className="text-muted-foreground">•</div>
            <div className="font-semibold">99% Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
