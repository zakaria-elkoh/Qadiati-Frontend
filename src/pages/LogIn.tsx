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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  remember: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

interface Slide {
  title: string;
  description: string;
  image: string;
}

export default function LogIn(): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

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
      image:
        "https://vannormanlaw.com/wp-content/uploads/2021/03/RuleofLaw.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  function onSubmit(data: FormValues) {
    console.log(data);
  }

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            {...field}
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-medium leading-none">
                        Remember me
                      </FormLabel>
                    </FormItem>
                  )}
                />
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    id="google"
                  >
                    <path
                      fill="#4285F4"
                      d="M23.761,12.273c0-0.819-0.067-1.635-0.207-2.441H12.237v4.621h6.48c-0.269,1.491-1.133,2.809-2.396,3.646V21.1h3.868C22.455,19.015,23.761,15.925,23.761,12.273z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M12.237,24c3.238,0,5.966-1.062,7.953-2.897l-3.868-3.001c-1.078,0.731-2.463,1.148-4.085,1.148c-3.129,0-5.786-2.109-6.735-4.952H1.518v3.092C3.554,21.443,7.702,24,12.237,24L12.237,24z"
                    ></path>
                    <path
                      fill="#FBBC04"
                      d="M5.502,14.297C5,12.809,5,11.192,5.502,9.704V6.612H1.518c-1.704,3.391-1.704,7.387,0,10.778L5.502,14.297L5.502,14.297z"
                    ></path>
                    <path
                      fill="#EA4335"
                      d="M12.237,4.752c1.711-0.028,3.363,0.617,4.602,1.799l3.427-3.424C18.094,1.087,15.217-0.033,12.237,0c-4.535,0-8.683,2.56-10.72,6.611l3.984,3.093C6.451,6.861,9.109,4.752,12.237,4.752L12.237,4.752z"
                    ></path>
                    <path
                      fill="#2D9248"
                      d="M5.502,14.297L5.502,14.297l-3.984,3.092l0,0C3.518,21.373,7.558,23.91,12,23.997v-4.753C8.975,19.141,6.427,17.067,5.502,14.297L5.502,14.297z"
                    ></path>
                    <path
                      fill="#DBA403"
                      d="M1.518,6.612L1.518,6.612c-1.704,3.391-1.704,7.387,0,10.778l0,0l3.984-3.092C5,12.809,5,11.192,5.502,9.704l0,0L1.518,6.612L1.518,6.612z"
                    ></path>
                    <path
                      fill="#CC3A2E"
                      d="M12,0.003C7.558,0.09,3.518,2.631,1.518,6.612l0,0l3.984,3.093C6.427,6.933,8.975,4.86,12,4.756V0.003L12,0.003z"
                    ></path>
                  </svg>
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="relative flex-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1020 1020"
                    id="facebook"
                  >
                    <path
                      fill="#1877f2"
                      d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                    ></path>
                  </svg>
                  Facebook
                </Button>
              </div>
            </form>
          </Form>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Button type="button" variant="link" className="px-0 text-primary">
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
}
