import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="font-gothic text-2xl text-gael-purple">GAEL</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="font-gothic px-3 py-2 text-gael-purple hover:text-gael-purple-dark transition-colors">Home</Link>
              <Link to="/news" className="font-gothic px-3 py-2 text-gael-purple hover:text-gael-purple-dark transition-colors">News</Link>
              <Link to="/gallery" className="font-gothic px-3 py-2 text-gael-purple hover:text-gael-purple-dark transition-colors">Gallery</Link>
              <Link to="/about" className="font-gothic px-3 py-2 text-gael-purple hover:text-gael-purple-dark transition-colors">About</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gael-purple hover:text-gael-purple-dark focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <Link to="/" className="font-gothic block px-3 py-2 text-gael-purple hover:text-gael-purple-dark">Home</Link>
            <Link to="/news" className="font-gothic block px-3 py-2 text-gael-purple hover:text-gael-purple-dark">News</Link>
            <Link to="/gallery" className="font-gothic block px-3 py-2 text-gael-purple hover:text-gael-purple-dark">Gallery</Link>
            <Link to="/about" className="font-gothic block px-3 py-2 text-gael-purple hover:text-gael-purple-dark">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;