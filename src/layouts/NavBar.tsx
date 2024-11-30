import { useState } from "react";
import { MessageCircle, Search, Zap } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SelectLanguage from "@/components/SelectLanguage";
import { ModeToggle } from "@/components/mode-toggle";
import { Link, useLocation } from "react-router-dom";
import { OpenNotificationButtonSmall } from "@/components/OpenNotificationButtonSmall";
import NotificationDropDown from "@/components/NotificationDropDown";

const NavBar = () => {
  const handleLogout = async () => {
    // await dispatch(logout());
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/auth/login", label: "Login" },
    { href: "/auth/register", label: "Register" },
    { href: "/connect", label: "Connect" },
    { href: "/help", label: "Help" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[48px] z-50 border-b bg-white shadow-md border border-b-gray-300 dark:bg-black dark:border-b-white/25">
      <div className="flex items-center gap-4 px-4 h-16 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5" />
          </div>
          <span className="hidden sm:inline">Test</span>
        </Link>

        <div className="hidden sm:flex relative max-w-sm w-full">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-8 bg-muted/50"
          />
        </div>

        <div className="hidden md:flex items-center gap-1 mx-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 py-2 rounded-md text-sm transition-colors hover:bg-muted ${
                pathname === item.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {/* notification */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <OpenNotificationButtonSmall />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <NotificationDropDown />
            </DropdownMenuContent>
          </DropdownMenu>

          {/* message */}
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Link to="/chat">
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Messages</span>
            </Link>
          </Button>

          <div className="hidden sm:flex items-center gap-2">
            <SelectLanguage />
            <ModeToggle />
          </div>

          {/* profile nav image */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img
                  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full bg-cover h-full"
                />
                <span className="sr-only">Profile</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* mobile nav */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-4 ">
                <div className="flex relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search"
                    className="pl-8 bg-muted/50"
                  />
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-3 py-2 text-center rounded-md text-sm transition-colors hover:bg-muted ${
                      pathname === item.href
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-20">
                <SelectLanguage />
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
