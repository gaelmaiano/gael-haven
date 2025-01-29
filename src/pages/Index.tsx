import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-warhammer-black text-white">
      <Navigation />
      <Hero />
      <ImageGallery />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;