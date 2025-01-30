import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gael-black">
      <Navigation />
      <Hero />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default Index;