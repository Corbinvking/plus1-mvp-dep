"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  BookOpen, 
  GraduationCap,
  Search,
  Clock,
  Trophy,
  User
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CourseGallery } from "@/components/ui/course-gallery";
import { Waves } from "@/components/ui/waves-background";
import { useTheme } from "next-themes";
import Image from "next/image";

const sampleCourses = [
  {
    id: "music-production",
    title: "Music Production Fundamentals",
    description:
      "Learn the basics of music production, from setting up your DAW to mixing and mastering your first track.",
    href: "/courses/music-production",
    image: "/course-thumbnails/music-production.jpg",
    duration: "8 weeks",
    level: "beginner" as const,
    contentType: "video" as const,
    contentUrl: "https://www.youtube.com/embed/Hi72cCOPUQU"
  },
  {
    id: "songwriting",
    title: "Songwriting Essentials",
    description:
      "Master the art of songwriting with practical exercises and professional techniques.",
    href: "/courses/songwriting",
    image: "/course-thumbnails/songwriting.jpg",
    duration: "6 weeks",
    level: "intermediate" as const,
    contentType: "video" as const,
    contentUrl: "https://www.youtube.com/embed/NC1PcpFT604"
  },
  {
    id: "mixing",
    title: "Professional Mixing Techniques",
    description:
      "Take your mixing skills to the next level with industry-standard practices and tools.",
    href: "/courses/mixing",
    image: "/course-thumbnails/mixing.jpg",
    duration: "10 weeks",
    level: "advanced" as const,
    contentType: "video" as const,
    contentUrl: "https://www.youtube.com/embed/_gDR0Pu66Kw"
  },
  {
    id: "marketing",
    title: "Music Marketing Mastery",
    description:
      "Learn how to promote your music effectively and build your audience in the digital age.",
    href: "/courses/marketing",
    image: "/course-thumbnails/marketing.jpg",
    duration: "4 weeks",
    level: "intermediate" as const,
    contentType: "video" as const,
    contentUrl: "https://www.youtube.com/embed/Aq_VTI_cXuY"
  }
];

export default function DashboardPage() {
  const { theme } = useTheme();
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard
    },
    {
      label: "My Learning",
      href: "/dashboard/learning",
      icon: BookOpen
    },
    {
      label: "Profile",
      href: "/dashboard/profile",
      icon: User
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: Settings
    },
    {
      label: "Logout",
      href: "/auth/logout",
      icon: LogOut
    }
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-background">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody>
          {links.map((link) => (
            <SidebarLink key={link.href} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>
      
      <main 
        className={cn(
          "transition-[padding] duration-300 ease-in-out",
          "md:pl-[72px]",
          open && "md:pl-[300px]"
        )}
      >
        <div className="relative min-h-screen">
          <div className="absolute inset-0 z-0">
            <Waves
              lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}
              backgroundColor="transparent"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              maxCursorMove={120}
              xGap={12}
              yGap={36}
            />
          </div>
          
          <div className="relative z-10">
            <div className="container mx-auto px-4 py-8">
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <Link 
                  href="/dashboard/learning"
                  className="rounded-xl border bg-card/80 backdrop-blur-sm p-6 shadow-sm hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Continue Learning</h3>
                      <p className="text-sm text-muted-foreground">Pick up where you left off</p>
                    </div>
                  </div>
                </Link>

                <Link 
                  href="/dashboard/courses"
                  className="rounded-xl border bg-card/80 backdrop-blur-sm p-6 shadow-sm hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 15V6" />
                        <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M12 12H3" />
                        <path d="M16 6H3" />
                        <path d="M12 18H3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Browse Courses</h3>
                      <p className="text-sm text-muted-foreground">Discover new skills and knowledge</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mb-8">
                <CourseGallery 
                  items={sampleCourses}
                  title="Featured Courses"
                  description="Explore our curated selection of music production courses designed to help you master your craft."
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/dashboard"
      className="font-normal flex items-center gap-2 text-sm text-black dark:text-white py-1 relative z-20"
    >
      <Image
        src="/logos/plus1-logo.jpeg"
        alt="Plus One Logo"
        width={40}
        height={40}
        className="rounded-lg"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre"
      >
        Plus One
      </motion.span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link
      href="/dashboard"
      className="font-normal flex items-center text-sm text-black dark:text-white py-1 relative z-20"
    >
      <Image
        src="/logos/plus1-logo.jpeg"
        alt="Plus One Logo"
        width={32}
        height={32}
        className="rounded-lg"
      />
    </Link>
  );
}; 