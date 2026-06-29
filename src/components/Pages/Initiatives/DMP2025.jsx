import React from 'react';
import PageHeroBanner from "../../PageHeroBanner";
export default function DMP2025ImpactReportMain() {
  return (
    <div>
              <PageHeroBanner title="Dedicated Mentoring Program 2025 – Impact Report" currentPage="Dedicated Mentoring Program 2025 – Impact Report" />
    <main className="w-full max-w-[1200px] mx-auto px-[15px] py-12">
      <div className="w-full flex justify-center">
        <div className="w-full relative">
          <iframe 
            src="https://pl-app.iiit.ac.in/rcts/c4gt/" 
            width="100%" 
            height="1000" 
            style={{ border: 'none', overflow: 'auto' }}
            title="DMP 2025 Impact Report"
          />
        </div>
      </div>
    </main>
    </div>
  );
}