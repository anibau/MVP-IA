
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import AnimatedImage from "@/components/AnimatedImage";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { 
  Sparkles, 
  Lightbulb, 
  Palette, 
  Clock, 
  Layers, 
  Shield,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      
      {/* Features section */}
      <section id="features" className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
            Features
          </span>
          <h2 className="h2 mb-6">Unlock Creative Possibilities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform offers everything you need to overcome creative blocks and generate fresh, innovative ideas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Sparkles size={24} />}
            title="AI-Powered Inspiration"
            description="Our cutting-edge AI analyzes your preferences and generates tailored inspiration to match your creative style."
          />
          <FeatureCard
            icon={<Lightbulb size={24} />}
            title="Idea Generation"
            description="Overcome creative blocks with smart suggestions that spark new directions and possibilities."
          />
          <FeatureCard
            icon={<Palette size={24} />}
            title="Creative Exploration"
            description="Explore different styles, themes, and approaches to expand your creative horizons."
          />
          <FeatureCard
            icon={<Clock size={24} />}
            title="Time-Saving Workflows"
            description="Streamline your creative process and focus on execution rather than ideation."
          />
          <FeatureCard
            icon={<Layers size={24} />}
            title="Project Organization"
            description="Keep all your ideas, inspirations and projects neatly organized in one place."
          />
          <FeatureCard
            icon={<Shield size={24} />}
            title="Private & Secure"
            description="Your ideas remain yours. We prioritize your privacy and the security of your creative work."
          />
        </div>
      </section>
      
      {/* How it works section */}
      <section id="how-it-works" className="section-container bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
              How It Works
            </span>
            <h2 className="h2 mb-6">Simple, Intuitive Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting started with Inspired is easy. Here's how our platform helps you unlock your creative potential.
            </p>
          </div>
          
          <div className="space-y-24">
            <Step
              number={1}
              title="Share Your Creative Context"
              description="Begin by telling us about your project, preferences, and creative goals. The more context you provide, the more tailored your inspiration will be."
              imageSrc="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              imageAlt="Person typing on laptop"
              reverse={false}
            />
            
            <Step
              number={2}
              title="Receive AI-Generated Inspiration"
              description="Our AI analyzes your input and generates custom inspiration tailored to your needs—from visual concepts to written ideas and creative directions."
              imageSrc="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              imageAlt="AI generating creative ideas"
              reverse={true}
            />
            
            <Step
              number={3}
              title="Refine and Explore Further"
              description="Not quite what you're looking for? Refine the results by providing feedback. The AI learns from your preferences to deliver increasingly relevant inspiration."
              imageSrc="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              imageAlt="Person refining creative work"
              reverse={false}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section id="testimonials" className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
            Testimonials
          </span>
          <h2 className="h2 mb-6">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creatives who have transformed their workflow with Inspired.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            content="Inspired has completely changed how I approach my design work. Whenever I'm stuck, it gives me fresh perspectives I hadn't considered."
            author="Alexandra Chen"
            role="UX Designer"
            avatarUrl="https://randomuser.me/api/portraits/women/45.jpg"
            rating={5}
          />
          <TestimonialCard
            content="As a writer, I used to struggle with blocks that would last for days. Now I can get unstuck in minutes. It's like having a creative partner."
            author="Michael Torres"
            role="Content Creator"
            avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
            rating={5}
          />
          <TestimonialCard
            content="The platform is intuitive and the suggestions are surprisingly relevant. It's saved me countless hours of staring at a blank canvas."
            author="Sarah Johnson"
            role="Freelance Illustrator"
            avatarUrl="https://randomuser.me/api/portraits/women/68.jpg"
            rating={4}
          />
        </div>
      </section>
      
      {/* Pricing section */}
      <section id="pricing" className="section-container bg-secondary/30">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
            Pricing
          </span>
          <h2 className="h2 mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your creative needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Starter"
            price="Free"
            description="Perfect for occasional creative inspiration"
            features={[
              "5 inspiration requests per month",
              "Basic idea generation",
              "24-hour support response time",
              "Access to community forum"
            ]}
            ctaText="Get Started"
            ctaLink="/register"
            popular={false}
          />
          
          <PricingCard
            title="Creator"
            price="$12"
            description="Ideal for regular creative professionals"
            features={[
              "50 inspiration requests per month",
              "Advanced idea generation",
              "Project organization",
              "4-hour support response time",
              "Creative style analysis"
            ]}
            ctaText="Start Free Trial"
            ctaLink="/register"
            popular={true}
          />
          
          <PricingCard
            title="Agency"
            price="$29"
            description="For teams and high-volume creators"
            features={[
              "Unlimited inspiration requests",
              "Team collaboration features",
              "API access",
              "1-hour support response time",
              "Custom training for your style",
              "Dedicated account manager"
            ]}
            ctaText="Contact Sales"
            ctaLink="/register"
            popular={false}
          />
        </div>
      </section>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

const Step = ({ 
  number, 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  reverse 
}: { 
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}>
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
            {number}
          </div>
          <div className="h-px bg-primary/20 flex-1 ml-4"></div>
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex-1">
        <AnimatedImage src={imageSrc} alt={imageAlt} className="rounded-xl shadow-md" />
      </div>
    </div>
  );
};

const PricingCard = ({
  title,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  popular
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular: boolean;
}) => {
  return (
    <div className={`glass-card relative ${popular ? 'border-primary shadow-lg scale-105 z-10' : ''}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-full">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground">/month</span>}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm">
            <svg
              className="h-5 w-5 text-primary flex-shrink-0 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to={ctaLink}
        className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
          popular
            ? "bg-primary text-primary-foreground hover:opacity-90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
};

export default Index;
