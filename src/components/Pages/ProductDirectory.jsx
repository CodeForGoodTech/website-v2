import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import PageHeroBanner from "../PageHeroBanner";
const ProductDirectory = () => {
  return (
    <div>
    <PageHeroBanner title="Product Directory" currentPage="Product Directory" />
    <section className="w-full bg-slate-50 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. overflow-hidden is CRITICAL here to make the child iframe/div 
             respect the Card's rounded corners.
          2. border-t-0 or p-0 ensures no internal spacing at the top.
        */}
        <Card className="overflow-hidden border-slate-200 bg-white shadow-md p-0">
          <CardContent className="p-0">
            <div className="relative w-full leading-[0]"> 
              {/* leading-[0] helps remove vertical alignment gaps sometimes caused by inline elements */}
              
              <iframe
                src="https://pl-app.iiit.ac.in/rcts/c4gt/product-directory"
                title="C4GT Product Directory Content"
                width="100%"
                height="1000"
                className="w-full min-h-[800px] border-none block"
                style={{ 
                  overflow: "auto",
                  marginTop: "-1px" // Micro-adjustment if a sub-pixel gap persists
                }}
                loading="lazy"
                allow="clipboard-write"
              />
            </div>
          </CardContent>
        </Card>

        <p className="mt-4 text-center text-sm text-slate-500 italic">
          Viewing the Unified Product Directory.
        </p>
      </div>
    </section>
    </div>
  );
};

export default ProductDirectory;