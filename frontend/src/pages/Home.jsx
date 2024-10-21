import CategoryCarousel from "@/components/CategoryCarousel";
import Footer from "@/components/Footer";
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
      <Footer/>
    </>
  );
}

export default Home;
