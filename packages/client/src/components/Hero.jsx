import { Container } from "@mui/material";

const Hero = () => {
  return (
    <Container className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-white">
      <section className="w-full max-w-4xl space-y-8">
        {/* Stars & Trust Text */}
        <div className="flex items-center space-x-2">
          <div className="flex text-yellow-500 text-xl">
            {"★★★★★".split("").map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            Trusted by 50,000+ customers
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Premium Tech
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Made Simple
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-700 max-w-2xl">
          Discover cutting-edge technology that enhances your lifestyle. Premium
          quality, minimalist design, exceptional performance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
            Shop Now →
          </button>
          <button className="border border-gray-700 text-gray-800 px-6 py-3 rounded-md font-medium">
            Explore Collection
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-10 max-w-md text-gray-800">
          <div>
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-2xl font-bold">99%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
