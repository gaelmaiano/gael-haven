const news = [
  {
    id: 1,
    title: "The Dark Gods Await",
    excerpt: "New challenges emerge from the shadows...",
    date: "2024.02.20",
  },
  {
    id: 2,
    title: "Rise of the Undead",
    excerpt: "Ancient powers stir in the depths...",
    date: "2024.02.18",
  },
  {
    id: 3,
    title: "Battle for the Realm",
    excerpt: "Epic conflicts shape the future...",
    date: "2024.02.15",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-warhammer-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-gothic text-4xl text-warhammer-purple mb-12 text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-warhammer-darkblue p-6 rounded-lg transform transition-transform hover:-translate-y-2"
            >
              <div className="text-warhammer-gray-light text-sm mb-2">{item.date}</div>
              <h3 className="font-gothic text-xl text-warhammer-purple mb-3">{item.title}</h3>
              <p className="text-warhammer-gray-light">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;