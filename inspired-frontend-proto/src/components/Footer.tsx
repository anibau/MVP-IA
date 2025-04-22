
import { Link } from "react-router-dom";
import { ArrowRight, Twitter, Instagram, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold">Inspired</Link>
            <p className="text-muted-foreground">
              Unlock your creative potential with AI-powered inspiration.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Instagram size={18} />} href="#" />
              <SocialLink icon={<Github size={18} />} href="#" />
              <SocialLink icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>
          
          <FooterLinks 
            title="Product" 
            links={[
              { name: "Features", href: "#features" },
              { name: "Pricing", href: "#pricing" },
              { name: "Tutorials", href: "#" },
              { name: "Updates", href: "#" },
            ]} 
          />
          
          <FooterLinks 
            title="Company" 
            links={[
              { name: "About", href: "#" },
              { name: "Careers", href: "#" },
              { name: "Blog", href: "#" },
              { name: "Contact", href: "#" },
            ]} 
          />
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest updates and news directly in your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="input-field flex-1 text-sm py-2"
              />
              <button
                type="button"
                className="btn-primary py-2 px-3 flex items-center justify-center"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Inspired. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a 
    href={href}
    className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLinks = ({ title, links }: { 
  title: string, 
  links: { name: string, href: string }[] 
}) => (
  <div className="space-y-4">
    <h3 className="font-semibold text-lg">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <a 
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
