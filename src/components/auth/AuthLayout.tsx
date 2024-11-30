import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

interface Slide {
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Connect with every application.",
    description: "Everything you need in an easily customizable dashboard.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRU2Dywubms_AGdW-T0xKJhvCg3Pd3ds3pQ&s",
  },
  {
    title: "Manage your workflow.",
    description: "Streamline your processes with our intuitive tools.",
    image: "https://honors.fiu.edu/wp-content/uploads/2024/04/law1.jpg",
  },
  {
    title: "Track your progress.",
    description: "Monitor your success with detailed analytics and insights.",
    image: "https://vannormanlaw.com/wp-content/uploads/2021/03/RuleofLaw.jpg",
  },
];

const AuthLayout = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-3 py-16 md:px-16">
        <Outlet />
      </div>
      <div className="relative hidden overflow-hidden md:block">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center bg-no-repeat ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full max-w-xl">
                <div className="space-y-4 text-center text-white">
                  <h2 className="text-3xl font-bold">{slide.title}</h2>
                  <p className="text-lg">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
