import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2, ChevronDown, Loader2 } from "lucide-react";
import PageHeroBanner from "../PageHeroBanner";
const ALL_BLOGS = [
  {
    id: 10102,
    date: { day: "13", month: "Mar" },
    category: "DMP 2023",
    title: "C4GT 2023: WarpSQL",
    image: "/downloaded-images/2024_03_4-1-1170x725.png",
    link: "https://codeforgoodtech.in/c4gt-2023-warpsql/",
    likes: 190
  },
  {
    id: 10103,
    date: { day: "13", month: "Mar" },
    category: "DMP 2023",
    title: "My Experience Contributing to AI-Tools",
    image: "/downloaded-images/2024_03_4-1-1170x725.png",
    link: "https://codeforgoodtech.in/my-experience-contributing-to-ai-tools/",
    likes: 208
  },
  {
    id: 10104,
    date: { day: "13", month: "Mar" },
    category: "DMP 2023",
    title: "My Experience Of Sprint And Working With Glific Teams",
    image: "/downloaded-images/2024_03_4-1-1170x725.png",
    link: "https://codeforgoodtech.in/my-experience-of-sprint-and-working-with-glific-teams/",
    likes: 189
  },
  {
    id: 10105,
    date: { day: "13", month: "Mar" },
    category: "DMP 2023",
    title: "Glific Mobile Application Udaipur Sprint",
    image: "/downloaded-images/2024_03_19-1170x725.webp",
    link: "https://codeforgoodtech.in/glific-mobile-application-udaipur-sprint/",
    likes: 172
  },
  {
    id: 10106,
    date: { day: "13", month: "Mar" },
    category: "DMP 2023",
    title: "Exploring New Horizons My Journey With Glific And C4GT",
    image: "/downloaded-images/2024_03_4-1-1170x725.png",
    link: "https://codeforgoodtech.in/exploring-new-horizons-my-journey-with-glific-and-c4gt/",
    likes: 185
  },
  {
    id: 10107,
    date: { day: "13", month: "Mar" },
    category: "DMP 2023",
    title: "But If You Try Sometimes",
    image: "/downloaded-images/2024_03_14-2-1024x684.png",
    link: "https://codeforgoodtech.in/but-if-you-try-sometimes/",
    likes: 168
  },
  {
    id: 10108,
    date: { day: "13", month: "Mar" },
    category: "DMP 2023",
    title: "TurboRepo: The advent of monorepo",
    image: "/downloaded-images/2024_03_13-2-1170x725.png",
    link: "https://codeforgoodtech.in/turborepo-the-advent-of-monorepo-%f0%9f%aa%84/",
    likes: 191
  },
  {
    id: 10109,
    date: { day: "13", month: "Mar" },
    category: "DMP 2023",
    title: "C4GT Halfway Checkpoint: Celebrating Progress and Growth",
    image: "/downloaded-images/2024_03_4-1-1170x725.png",
    link: "https://codeforgoodtech.in/c4gt-halfway-checkpoint-celebrating-progress-and-growth/",
    likes: 163
  },
  {
    id: 10110,
    date: { day: "13", month: "Mar" },
    category: "DMP 2023",
    title: "0 to 11k Lines of Code: My Journey with C4gt",
    image: "/downloaded-images/2024_03_12-2-1024x647.png",
    link: "https://codeforgoodtech.in/0-to-11k-lines-of-code-my-journey-with-c4gt/",
    likes: 153
  }
];

const BlogsPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setIsLoading(false);
    }, 800);
  };

  const visibleBlogs = ALL_BLOGS.slice(0, visibleCount);

  return (
    <div>
            <PageHeroBanner title="Blogs" currentPage="Blogs" />
    <main className="w-full bg-slate-50/50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleBlogs.map((blog) => (
            <Card key={blog.id} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col rounded-xl">
              
              {/* Image Container with Date Badge */}
              <div className="relative overflow-hidden aspect-[16/10] leading-[0]">
                <div className="absolute top-0 left-0 z-10 bg-[#880163] text-white font-bold p-3 flex flex-col items-center justify-center min-w-[60px] shadow-lg">
                  <span className="text-xl">{blog.date.day}</span>
                  <span className="text-[10px] uppercase tracking-tighter">{blog.date.month}</span>
                </div>
                <a href={blog.link} target="_blank" rel="noreferrer" className="block h-full">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>

              <CardContent className="p-6 flex-grow">
                <Badge variant="outline" className="mb-3 border-[#880163] text-[#880163] rounded-sm font-medium">
                  {blog.category}
                </Badge>
                <h3 className="text-xl font-bold leading-tight text-slate-900 group-hover:text-[#880163] transition-colors line-clamp-3">
                  <a href={blog.link} target="_blank" rel="noreferrer">
                    {blog.title}
                  </a>
                </h3>
              </CardContent>

              <CardFooter className="px-6 py-4 border-t border-slate-100 flex justify-between items-center bg-slate-50/20">
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="flex items-center gap-1.5 cursor-default">
                    <Heart className="w-4 h-4 fill-slate-200 text-slate-400" />
                    <span className="text-xs font-semibold">{blog.likes}</span>
                  </div>
                  <Share2 className="w-4 h-4 hover:text-[#880163] cursor-pointer transition-colors" />
                </div>
                <a 
                  href={blog.link} 
                  className="text-xs font-black text-[#880163] hover:underline uppercase tracking-widest"
                >
                  Read More
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Functional Load More Section */}
        {visibleCount < ALL_BLOGS.length && (
          <div className="mt-16 flex flex-col items-center gap-4">
            <Button 
              onClick={handleLoadMore}
              disabled={isLoading}
              className="bg-[#880163] hover:bg-[#6b014e] text-white font-bold py-6 px-12 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 min-w-[200px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Load More <ChevronDown className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
            <p className="text-sm text-slate-400">
              Showing {visibleBlogs.length} of {ALL_BLOGS.length} Articles
            </p>
          </div>
        )}

      </div>
    </main>
    </div>
  );
};

export default BlogsPage;