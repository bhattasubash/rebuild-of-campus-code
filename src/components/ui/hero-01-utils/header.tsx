import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export interface NavigationSection {
  title: string;
  href: string;
  isActive?: boolean;
}

interface HeaderProps {
  navigationData?: NavigationSection[];
  logoText?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Header({
  navigationData = [
    { title: "Home", href: "/", isActive: true },
    { title: "About us", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Team", href: "#team" },
    { title: "Pricing", href: "#pricing" },
    { title: "Awards", href: "#awards" },
  ],
  ctaText = "Let's Collaborate",
  ctaHref = "/student",
}: HeaderProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4 bg-[#FBFBF9]/80 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-[1320px] items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center z-10">
          <img
            src="/campuscode-logo.png"
            alt="CampusCode"
            className="h-8 w-auto object-contain object-left"
          />
        </Link>

        {/* Center Navigation Pill */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 rounded-full border border-[#E5E5E0] bg-[#F2F2EE]/70 px-2 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-sm">
          {navigationData.map((item, idx) => {
            const isAnchor = item.href.startsWith("#");
            const Component = isAnchor ? "a" : Link;
            return (
              <Component
                key={idx}
                to={!isAnchor ? item.href : undefined}
                href={isAnchor ? item.href : undefined}
                className={`rounded-full px-4 py-1.5 font-inter text-[13.5px] font-medium transition-all ${
                  item.isActive
                    ? "bg-white text-[#111111] shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                    : "text-[#555550] hover:text-[#111111] hover:bg-white/50"
                }`}
              >
                {item.title}
              </Component>
            );
          })}
        </nav>

        {/* Right side spacer / Mobile Sheet Trigger */}
        <div className="flex items-center justify-end min-w-[32px] sm:min-w-[120px]">
          {/* Mobile Sheet Trigger */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5 text-[#111111]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#FAF9F7] p-6">
                <div className="flex flex-col gap-6 mt-8">
                  {navigationData.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="font-inter text-lg font-medium text-[#111111] hover:text-[#7665FF]"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    to={ctaHref}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3 font-inter text-sm font-medium text-white mt-4"
                  >
                    <span>{ctaText}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
