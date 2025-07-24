import { Container } from "@mui/material";
import { GradientTextButton } from "./UI/Button";

const Hero = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      className="flex items-center justify-center min-h-[70vh] bg-white"
    >
      <section className="w-full max-w-4xl flex flex-col items-center justify-center px-4 py-10 text-center space-y-8">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Mindfulness
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            and productivity
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-700 max-w-2xl">
          Discover products that enhances mind positivity and productivity, keep
          up with your journaling habits with our in house diary, your data and
          space is safe.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <GradientTextButton>Shop Now →</GradientTextButton>
          <GradientTextButton>Journal</GradientTextButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-10 max-w-md text-gray-800">
          <div className="text-center">
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">99%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
