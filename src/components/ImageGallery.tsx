const images = [
  { id: 1, src: "/lovable-uploads/4d9cd345-71e8-4c91-8bcf-d7c5d1719622.png", alt: "Demon artwork" },
  { id: 2, src: "/lovable-uploads/a8d07386-87b9-4613-ae0d-dc69e6e21211.png", alt: "Warrior artwork" },
  { id: 3, src: "/lovable-uploads/31bbb0ca-84d4-4f16-a0a8-2129bfb00158.png", alt: "Portrait artwork" },
];

const ImageGallery = () => {
  return (
    <section className="py-20 bg-warhammer-darkblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-gothic text-4xl text-warhammer-purple mb-12 text-center">Gallery of Darkness</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warhammer-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;