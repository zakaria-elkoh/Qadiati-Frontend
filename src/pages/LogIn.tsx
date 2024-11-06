import { useState, useEffect } from "react";
import { Eye, EyeOff, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
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
      image:
        "https://vannormanlaw.com/wp-content/uploads/2021/03/RuleofLaw.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-3 py-16 md:px-16">
        <Card className="w-full max-w-lg space-y-8 py-4 px-4 sm:px-8">
          <div className="space-y-2">
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold mb-4 mt-2 w-fit"
            >
              <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <span className="hidden sm:inline">Qadiati</span>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight">
              Log in to your Account
            </h1>
            <p className="text-sm text-muted-foreground">
              Welcome back! Select method to log in:
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="space-y-4">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "border-red-500" : ""}
                  />
                </FormControl>
                {errors.email && (
                  <FormMessage className="text-red-500 text-sm">
                    {errors.email}
                  </FormMessage>
                )}
              </FormItem>
              <FormItem>
                <FormLabel>Password</FormLabel>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={errors.password ? "border-red-500" : ""}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {errors.password && (
                  <FormMessage className="text-red-500 text-sm">
                    {errors.password}
                  </FormMessage>
                )}
              </FormItem>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, remember: checked }))
                  }
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Button
                type="button"
                variant="link"
                className="px-0 text-primary"
              >
                Forgot Password?
              </Button>
            </div>
            <Button type="submit" className="w-full">
              Log in
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or continue with email
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                className="relative flex-1"
              >
                <img
                  src="/api/placeholder/20/20"
                  alt="Google"
                  className="absolute left-4 h-5 w-5"
                />
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="relative flex-1"
              >
                <img
                  src="/api/placeholder/20/20"
                  alt="Facebook"
                  className="absolute left-4 h-5 w-5"
                />
                Facebook
              </Button>
            </div>
          </form>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Button variant="link" className="px-0 text-primary">
              Create an account
            </Button>
          </div>
        </Card>
      </div>
      <div className="relative hidden overflow-hidden md:block">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center bg-no-repeat ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.9), rgba(37, 99, 235, 0.9)), url(${slide.image})`,
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
}
