
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass shadow-sm" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold transition-all duration-300 hover:opacity-80"
          >
            Keep Inspired
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-secondary"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn-primary text-sm"
              >
                Register
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 animate-fade-in" />
            ) : (
              <Menu className="h-6 w-6 animate-fade-in" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              <NavLinks mobile={true} />
            </nav>
            <div className="flex flex-col space-y-3">
              <Link
                to="/login"
                className="text-center text-sm font-medium px-4 py-2 rounded-full border border-input transition-all duration-300 hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn-primary text-center text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const links = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`font-medium transition-all duration-300 subtle-underline ${
            mobile ? "text-base py-2" : "text-sm"
          }`}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;
