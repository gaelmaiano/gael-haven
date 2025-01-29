const Footer = () => {
  return (
    <footer className="bg-warhammer-black py-12 border-t border-warhammer-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-gothic text-xl text-warhammer-purple mb-4">About</h3>
            <p className="text-warhammer-gray-light">
              Dive into the dark and mysterious world of Warhammer, where ancient powers and epic battles await.
            </p>
          </div>
          <div>
            <h3 className="font-gothic text-xl text-warhammer-purple mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-warhammer-gray-light hover:text-warhammer-purple transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-warhammer-gray-light hover:text-warhammer-purple transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-warhammer-gray-light hover:text-warhammer-purple transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-gothic text-xl text-warhammer-purple mb-4">Connect</h3>
            <p className="text-warhammer-gray-light">
              Join our community and stay updated with the latest news and events.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-warhammer-purple/20 text-center text-warhammer-gray-light">
          <p>&copy; 2024 Warhammer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;