import React from "react";
import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; 
import PageHeroBanner from "../../PageHeroBanner";

export default function DMP() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero / Page Header Section */}
      <PageHeroBanner title="Dedicated Mentoring Program" currentPage="Dedicated Mentoring Program" />

      {/* Main Content - Iframe integration matching the live site */}
      <main className="container mx-auto px-4 pb-16 flex-grow">
        <div className="w-full h-[1000px] rounded-xl bg-white overflow-hidden">
          <iframe
            src="https://pl-app.iiit.ac.in/rcts/c4gt/dmp-a"
            width="100%"
            height="100%"
            style={{ border: "none", overflow: "auto" }}
            title="Dedicated Mentoring Program Platform"
            loading="lazy"
          />
        </div>
      </main>
    </div>
  );
}