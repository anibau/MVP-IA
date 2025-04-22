
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = heroElement.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      heroElement.style.setProperty('--x', `${x}`);
      heroElement.style.setProperty('--y', `${y}`);
    };
    
    heroElement.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ 
        '--x': '0.5', 
        '--y': '0.5',
      } as React.CSSProperties}
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-secondary/80 to-background/20 opacity-50"
        style={{ 
          background: `radial-gradient(circle at calc(var(--x) * 100%) calc(var(--y) * 100%), rgba(240, 240, 245, 0.8), rgba(255, 255, 255, 0))` 
        }}
      ></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYyaC0ydi00aDJ6bTAgMTBoLTJ2MmgydjJoMnYtNGgtMnptMTAgMGgtMnYyaDJ2LTJ6bS0yLTJoMnYtMmgtMnYyem0tNCAxMGgydjJoLTJ2LTJ6bTItMmgydi0yaC0ydjJ6bS0yLTR6TTQwIDQwdjIaDJ2LTJoLTJ6bS0xMC0yNXYxaDF2LTFoLTF6bS0zIDBoMXYxaC0xdi0xem01LTRoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTQgNGgxdjFoLTF2LTF6bS0yIDFoMXYxaC0xdi0xem05LThoMXYxaC0xdi0xem0tNiAwaDJ2MWgtMnYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiA0aDJ2MWgtMnYtMXptOSA4aDJ2MWgtMnYtMXptLTQgMGgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS05IDBoMXYxaC0xdi0xem0tMiAwaDJ2MWgtMnYtMXptMi00aDJ2MWgtMnYtMXptNC0xNmgxdjFoLTF2LTF6bTAgMmgxdjJoLTF2LTJ6bTAgMmgxdjFoLTF2LTF6TTIwIDQwdjJoMnYtMmgtMnptLTQtMjV2MWgxdi0xaC0xem0tMiAxdjFoLTF2LTFoMXptLTIgMXYxaC0xdi0xaDF6bTEgMnYxaC0xdi0xaDF6bS0yLTJ2MWgtMXYtMWgxem0tMi0xaDJ2MWgtMnYtMXptMiA1djJoLTJ2LTJoMnptMjAgMHYyaC0ydi0yaDJ6bS0yIDNoLTJ2LTJoNHYyaC0yem0tMTUgMTJoMXYxaC0xdi0xem0tMiAwaDJ2MmgtMnYtMnptLTItMmgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 animate-fade-in">
              AI-Powered Creativity
            </span>
            <h1 className="h1 mb-6 opacity-0 animate-slide-down" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Unlock Your Creative Potential with AI-Powered Inspiration
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-slide-down" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Generate fresh ideas, overcome creative blocks, and explore new directions with our intelligent inspiration platform.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <Link to="/register" className="btn-primary flex items-center gap-2">
              Get Started <ArrowRight size={16} />
            </Link>
            <a href="#how-it-works" className="btn-outline">
              Learn More
            </a>
          </div>
          
          <div className="pt-12 opacity-0 animate-slide-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <div className="glass-card max-w-3xl mx-auto overflow-hidden">
              <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-primary/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-muted-foreground">Interactive product video will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 right-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default HeroSection;
