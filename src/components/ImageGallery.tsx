const images = [
  { id: 1, src: "/lovable-uploads/87bda20f-55e3-4d8e-b360-f5c38efbdaaa.png", alt: "Gothic character artwork" },
  { id: 2, src: "/lovable-uploads/1b09661d-fcbd-4d91-b05e-63b31c43cdd1.png", alt: "Character portrait" },
  { id: 3, src: "/lovable-uploads/8708776b-8206-4d7c-a763-dd32934c1751.png", alt: "Digital portrait" },
  { id: 4, src: "/lovable-uploads/e6f1f91c-0353-43cb-9a45-cc4abb3c6d59.png", alt: "Black and white portrait" },
  { id: 5, src: "/lovable-uploads/810f8b47-6e10-4391-8843-c714a5b9cdd2.png", alt: "Minimalist portrait" },
  { id: 6, src: "/lovable-uploads/b864dfde-1cf8-41a4-a429-be06810cade7.png", alt: "Dark fantasy artwork" },
];

const ImageGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-gothic text-4xl text-gael-purple mb-12 text-center">Gallery of Darkness</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gael-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;