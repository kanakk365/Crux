import CategoryCarousel from "@/components/CategoryCarousel";
import HeroSection from "@/components/HeroSection";
import LatestJobs from "@/components/LatestJobs";
import Navbar from "@/components/shared/Navbar";
import React from "react";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarousel/>
      <LatestJobs/>
    </>
  );
}

export default Home;
